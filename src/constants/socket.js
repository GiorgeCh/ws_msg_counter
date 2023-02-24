

export const DEFAULT_SOCKET_URL = 'wss://ws.bitstamp.net';
export const DEFAULT_SOCKET_MESSAGE = JSON.stringify({
    event: "bts:subscribe",
    data: {
        channel: "order_book_btcusd"
    }
})

export const SOCKET_STATUS_ON = 'on';
export const SOCKET_STATUS_OFF = 'off';
export const SOCKET_STATUS_CONNECTING = 'connecting';
export const SOCKET_STATUS_CLOSEING = 'closing';
