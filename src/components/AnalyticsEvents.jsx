import { useCallback, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function AnalyticsEvents() {
  const location = useLocation()

  const trackEvent = useCallback((eventName, eventData) => {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: eventName,
      page_location: window.location.pathname,
      timestamp: new Date().toISOString(),
      ...eventData
    })
  }, [])

  useEffect(() => {
    const getButtonLocation = (element) => {
      const rect = element.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const elementTop = rect.top + scrollTop
      const pageHeight = document.documentElement.scrollHeight

      if (elementTop < pageHeight * 0.3) return 'top'
      if (elementTop < pageHeight * 0.7) return 'middle'
      return 'bottom'
    }

    const handleClick = (event) => {
      const clickedElement = event.target instanceof Element ? event.target : null
      if (!clickedElement) return

      const target = clickedElement.closest('a')
      if (!target) return

      const href = target.getAttribute('href') || ''
      const text = target.textContent.trim()
      const normalizedText = text.toLowerCase()
      const analyticsTag = target.dataset.analytics || ''
      const ctaType = target.dataset.ctaType
      const buttonLocation = target.dataset.buttonLocation
      const serviceType = target.dataset.serviceType

      if (href.includes('google.com/maps')) {
        let locationType = 'general'

        if (analyticsTag === 'footer-address') {
          locationType = 'footer_address'
        } else if (analyticsTag === 'contact-address') {
          locationType = 'contact_address'
        } else if (analyticsTag === 'contact-directions-button') {
          locationType = 'contact_directions_button'
        }

        trackEvent('location_directions_click', {
          location_type: locationType,
          link_text: text,
          destination: href
        })
        return
      }

      if (ctaType) {
        trackEvent('cta_click', {
          cta_type: ctaType,
          button_text: text,
          button_location: buttonLocation || getButtonLocation(target),
          ...(serviceType ? { service_type: serviceType } : {})
        })
        return
      }

      if (
        normalizedText.includes('repair quote') ||
        (href === '/repair' && normalizedText.includes('quote'))
      ) {
        trackEvent('cta_click', {
          cta_type: 'repair_quote',
          button_text: text,
          button_location: getButtonLocation(target)
        })
        return
      }

      if (
        (normalizedText.includes('contact') || normalizedText.includes('get in touch')) &&
        href === '/contact'
      ) {
        trackEvent('cta_click', {
          cta_type: 'contact',
          button_text: text,
          button_location: getButtonLocation(target)
        })
        return
      }

      if (target.closest('nav')) {
        trackEvent('nav_click', {
          nav_item: text,
          destination: href,
          nav_location: target.closest('footer') ? 'footer' : 'header'
        })
        return
      }

      if (normalizedText === 'learn more') {
        const serviceMap = {
          '/repair': 'repair_services',
          '/surfboard-showers': 'surfboard_showers',
          '/high-voltage-art': 'high_voltage_art',
          '/about': 'about'
        }

        trackEvent('service_interest', {
          service_type: serviceMap[href] || 'unknown',
          link_text: text,
          destination: href
        })
        return
      }

      if (href.includes('paddleboston.com') || href.includes('paddlelincoln.com')) {
        trackEvent('partner_link_click', {
          partner_name: href.includes('paddleboston') ? 'Paddle Boston' : 'Lincoln Canoe & Kayak',
          destination: href
        })
        return
      }

      const isInstagram = href.includes('instagram.com')
      const isFacebook = href.includes('facebook.com')

      if (isInstagram || isFacebook) {
        trackEvent('social_click', {
          platform: isInstagram ? 'instagram' : 'facebook',
          account_type: href.includes('mulholland_high_voltage_art')
            ? 'high_voltage_art'
            : 'main',
          destination: href
        })
        return
      }

      if (target.closest('a[href="/"]') && target.querySelector('img')) {
        trackEvent('logo_click', {
          logo_location: target.closest('header') ? 'header' : 'footer'
        })
        return
      }

      if (href.startsWith('tel:')) {
        trackEvent('phone_click', {
          phone_number: href.replace('tel:', ''),
          link_text: text
        })
        return
      }

      if (href.startsWith('mailto:')) {
        trackEvent('email_click', {
          email_address: href.replace('mailto:', ''),
          link_text: text
        })
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [trackEvent])

  useEffect(() => {
    const formStates = new Map()

    const getFormId = (form) =>
      form.dataset.analyticsForm || form.id || form.getAttribute('name') || form.className || 'unknown_form'

    const handleFocusIn = (event) => {
      if (!(event.target instanceof Element)) return
      const form = event.target.closest('form[data-analytics-form]')
      if (!form) return

      let state = formStates.get(form)
      if (!state) {
        state = { started: false, submitted: false }
        formStates.set(form, state)
      }

      if (!state.started) {
        state.started = true
        trackEvent('form_start', {
          form_id: getFormId(form)
        })
      }
    }

    const handleSubmit = (event) => {
      const form = event.target instanceof HTMLFormElement ? event.target : null
      if (!form || !form.matches('form[data-analytics-form]')) return

      let state = formStates.get(form)
      if (!state) {
        state = { started: false, submitted: false }
        formStates.set(form, state)
      }

      if (!state.started) {
        state.started = true
        trackEvent('form_start', {
          form_id: getFormId(form)
        })
      }

      state.submitted = true
      trackEvent('form_submit', {
        form_id: getFormId(form)
      })
    }

    const emitAbandonEvents = () => {
      formStates.forEach((state, form) => {
        if (state.started && !state.submitted) {
          trackEvent('form_abandon', {
            form_id: getFormId(form)
          })
        }
      })
      formStates.clear()
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        emitAbandonEvents()
      }
    }

    document.addEventListener('focusin', handleFocusIn, true)
    document.addEventListener('submit', handleSubmit, true)
    window.addEventListener('beforeunload', emitAbandonEvents)
    window.addEventListener('pagehide', emitAbandonEvents)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      emitAbandonEvents()
      document.removeEventListener('focusin', handleFocusIn, true)
      document.removeEventListener('submit', handleSubmit, true)
      window.removeEventListener('beforeunload', emitAbandonEvents)
      window.removeEventListener('pagehide', emitAbandonEvents)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [location.pathname, trackEvent])

  return null
}
