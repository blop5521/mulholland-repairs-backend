import { useEffect } from 'react'

export function AnalyticsEvents() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []

    const trackClick = (eventName, eventData) => {
      window.dataLayer.push({
        event: eventName,
        page_location: window.location.pathname,
        timestamp: new Date().toISOString(),
        ...eventData
      })
    }

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
      const target = event.target.closest('a')
      if (!target) return

      const href = target.getAttribute('href') || ''
      const text = target.textContent.trim()
      const normalizedText = text.toLowerCase()
      const analyticsTag = target.dataset.analytics || ''

      if (href.includes('google.com/maps')) {
        let locationType = 'general'

        if (analyticsTag === 'footer-address') {
          locationType = 'footer_address'
        } else if (analyticsTag === 'contact-address') {
          locationType = 'contact_address'
        } else if (analyticsTag === 'contact-directions-button') {
          locationType = 'contact_directions_button'
        }

        trackClick('location_directions_click', {
          location_type: locationType,
          link_text: text,
          destination: href
        })
        return
      }

      if (
        normalizedText.includes('repair quote') ||
        (href === '/repair' && normalizedText.includes('quote'))
      ) {
        trackClick('cta_click', {
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
        trackClick('cta_click', {
          cta_type: 'contact',
          button_text: text,
          button_location: getButtonLocation(target)
        })
        return
      }

      if (target.closest('nav')) {
        trackClick('nav_click', {
          nav_item: text,
          destination: href
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

        trackClick('service_interest', {
          service_type: serviceMap[href] || 'unknown',
          link_text: text,
          destination: href
        })
        return
      }

      if (href.includes('paddleboston.com') || href.includes('paddlelincoln.com')) {
        trackClick('partner_link_click', {
          partner_name: href.includes('paddleboston') ? 'Paddle Boston' : 'Lincoln Canoe & Kayak',
          destination: href
        })
        return
      }

      if (href.includes('instagram.com')) {
        trackClick('social_click', {
          platform: 'instagram',
          account_type: href.includes('mulholland_high_voltage_art')
            ? 'high_voltage_art'
            : 'main',
          destination: href
        })
        return
      }

      if (target.closest('a[href="/"]') && target.querySelector('img')) {
        trackClick('logo_click', {
          logo_location: target.closest('header') ? 'header' : 'footer'
        })
        return
      }

      if (href.startsWith('tel:')) {
        trackClick('phone_click', {
          phone_number: href.replace('tel:', ''),
          link_text: text
        })
        return
      }

      if (href.startsWith('mailto:')) {
        trackClick('email_click', {
          email_address: href.replace('mailto:', ''),
          link_text: text
        })
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}
