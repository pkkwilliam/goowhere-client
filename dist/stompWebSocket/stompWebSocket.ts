import SockJS from "sockjs-client";
import Stomp from "stompjs";

export default class WebSocketUtil {
  static _socket = null;
  static _stompClient = null;
  static _token = null;
  static _subscribes = [];

  constructor(requestUrl, token, subscribes) {
    WebSocketUtil._socket = new SockJS(requestUrl);
    WebSocketUtil._token = token;
    WebSocketUtil._subscribes = subscribes;
    WebSocketUtil._stompClient = Stomp.over(this.socket);
  }

  get socket() {
    return WebSocketUtil._socket;
  }

  get stompClient() {
    return WebSocketUtil._stompClient;
  }

  get subscribes() {
    return WebSocketUtil._subscribes;
  }

  get token() {
    return WebSocketUtil._token;
  }

  connectWebSocket(onConnectSuceed, onConnectError) {
    this.stompClient.connect({}, onConnectSuceed, onConnectError);
  }

  sendMessageToChannel(channelUrl, content) {
    this.stompClient.send(channelUrl, {}, content);
  }

  subscribeChannel(channel, onResponse) {
    this.stompClient.subscribe(channel, (response) => onResponse(response));
  }
}
