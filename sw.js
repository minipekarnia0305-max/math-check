// Нужен только для того, чтобы Chrome предлагал установить Math Check как приложение.
// Ничего не кэширует: страница всегда берётся из сети и ведёт на текущий адрес сервера.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
