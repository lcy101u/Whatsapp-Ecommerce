const production = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || 'production',
}

const development = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: '3000',
  Meta_WA_accessToken: 'EAAK3fgPXUIMBAOpLcCHSEpAonIC2M4FW86oUIJ84EGv0cSIvjhAIEwHypuxZAqhKRe9axJPIqOow8eC3GfPRPSADYxFPZA64x6Tl6ZBgDTpz9DXCD4sgyFWolRWYQkjDFTwQVkTIZB0n8KbYKfT0bzZB12cfKAdsIKOZBYZAubKjV3QB9KIJbY6ZAjiSezV5bjFB3JF6b9auwgZDZD',
  Meta_WA_SenderPhoneNumberId: '101979299278871',
  Meta_WA_wabaId: '108671205263839',
  Meta_WA_VerifyToken: 'FakeShop'
}

const fallback = {
  ...process.env,
  NODE_ENV: undefined,
}

module.exports = environment => {
  console.log(`Execution environment selected is: "${environment}"`);
  if (environment === 'production') {
    return production;
  } else if (environment === 'development') {
    return development;
  } else {
    return fallback
  }
}