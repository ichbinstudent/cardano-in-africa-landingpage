export default async function ({
  i18n,
}, inject) {
  window._iub = window._iub || []
  window.dataLayer = window.dataLayer || []

  _iub.csConfiguration = {
    'gdprAppliesGlobally': false,
    'countryDetection': true,
    'invalidateConsentWithoutLog': true,
    'consentOnContinuedBrowsing': false,
    'perPurposeConsent': true,
    'lang': i18n.locale,
    'siteId': 2509614,
    'floatingPreferencesButtonDisplay': 'bottom-right',
    'enableRemoteConsent': true,
    'cookiePolicyInOtherWindow': true,
    'purposes': '4',
    'cookiePolicyId': 28870264,
    'banner': {
      'closeButtonRejects': true,
      'acceptButtonDisplay': true,
      'customizeButtonDisplay': true,
      'rejectButtonDisplay': true,
      'explicitWithdrawal': true,
      'position': 'bottom',
      'listPurposes': true
    },
    callback: {
      onConsentRead () {
        if (_iub.cs.consent.purposes['4']) {
          window._etracker.enableCookies('cardanoin.africa')
        } else {
          window._etracker.disableCookies('cardanoin.africa')
        }
      }
    }
  }

  let e = document.createElement('script')
  e.type = 'text/javascript'
  e.src = '//cdn.iubenda.com/cs/tcf/beta/stub-v2.js'
  document.head.appendChild(e)

  e = document.createElement('script')
  e.type = 'text/javascript'
  e.src = '//cdn.iubenda.com/cs/tcf/beta/safe-tcf-v2.js'
  document.head.appendChild(e)

  e = document.createElement('script')
  e.type = 'text/javascript'
  e.src = '//cdn.iubenda.com/cs/beta/iubenda_cs.js'
  e.async = true
  document.head.appendChild(e)
}
