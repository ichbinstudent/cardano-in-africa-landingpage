export default async function ({
  i18n,
}, inject) {
  window._iub = window._iub || []

  window._iub.csConfiguration = {
    'countryDetection': true,
    'invalidateConsentWithoutLog': true,
    'consentOnContinuedBrowsing': false,
    'perPurposeConsent': true,
    'enableTcf': true,
    'enableRemoteConsent': true,
    'googleAdditionalConsentMode': true,
    'lang': i18n.locale,
    'siteId': 2509614,
    'floatingPreferencesButtonDisplay': 'bottom-right',
    'gdprAppliesGlobally': false,
    'cookiePolicyId': 28870264,
    'banner': {
      'closeButtonRejects': true,
      'acceptButtonDisplay': true,
      'customizeButtonDisplay': true,
      'rejectButtonDisplay': true,
      'listPurposes': true,
      'explicitWithdrawal': true,
      'position': 'bottom'
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
