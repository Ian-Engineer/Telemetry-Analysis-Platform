const isLocalHost = Boolean(
  window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

let config = {
  endpoint: isLocalHost ? "http://localhost:8000" : "https://actual-domain-name.com",
  version: "0.1.0",
  isUnderMaintenance: false,
  maintenanceMessage: "",
  development: isLocalHost,
};

export default config;
