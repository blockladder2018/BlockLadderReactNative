export const enabledFixtures = {
  // APIs mocked due to no implementations
  sentSmsVerification: true,
  register: true,
  login: true,
  confirmSms: true,

  // Implemented APIs
  proxys: false,
  channels: false,
};

export default {
  useFixtures: true,
};
