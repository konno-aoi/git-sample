const fetch = require('node-fetch');																							
																							
const url = 'https://fcm.googleapis.com/fcm/send';																							
																							
const payload = {																							
  to: "d4hluVegac1hS6kBezPkiH:APA91bEWUTkIhDpBTLkw3tkkzrSLR7Py4diWNp0T86A02y6oHIzNudYy-0NZQ__wx21zSsoxh3pEr6r7Vm7kwpigk8RjD0uw-xym66FyQHQkcWSev3CGkko54km7n5JfGyPQq68yws1N",																							
  notification: {																							
    title: '通知テスト',																							
    body: 'これはテストです',																							
  }																							
};																							
																							
const opts = {																							
  method: 'post',																							
  headers: {																							
    Authorization: `key=AAAArE96o0g:APA91bFxEQcpYADSEIA11GqDDuR_m9iRmfkZvIYxfcNGZgo2Hpi7lhzaZeM5khAGVQLhKuLCOSR1ZFWDgjg_AxARWALpIIbAflADHTkW-o_AaYkAIPhOrRAukBqzxaV2mRDq-xTn_CJg`,																							
    'Content-Type': 'application/json',																							
  },																							
  body: JSON.stringify(payload),																							
};																							
																							
fetch(url, opts)																							
  .then(res => console.log(res));																							
																							
