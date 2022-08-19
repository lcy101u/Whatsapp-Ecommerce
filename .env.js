const production = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || 'production',
}

const development = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: '9000',
  Meta_WA_accessToken: 'EAAK3fgPXUIMBAHuIBvfXEzpHoVOzWYzRbNa8MqAtSYXjOpZAvhxv48ZABpixX8902hcwoge4m3sVrcV7KIKvFj0TcrnZAxDrQVqazqxvJKiAdETMzZACSekVlyKWSv1E6ynnR7U6EMXFEiziELtUubuZAZAZAmrsPh8HNjUb8K0pFDoAviIuKRJPCtFqaetfZBjpwM8iA6FwHgZDZD',
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