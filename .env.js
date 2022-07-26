const production = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || 'production',
}

const development = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: '9000',
  Meta_WA_accessToken: 'EAAK3fgPXUIMBAKVlMm5HSbk3UbagX1p7UqNvRQEEYmfEZC2TModSITURrmFrdG2y1XFDXeUOLE5JphOPRM7yqz98Yrs38rj4mX7tFJksDE1jcEPWNZAo28ZBNghcgZCstRm7hcKy0XpZA6NGXw5bhAeu2nCwkBdTTQb3WtEXlZCRuZBc27McY2ss8qCCygZBNbZBsdJRlYci33QZDZD',
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