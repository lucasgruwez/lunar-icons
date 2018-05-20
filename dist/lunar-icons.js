(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
    "alarm": "<circle cx=\"12\" cy=\"14\" r=\"8\"/><path d=\"M7.79 3.84a11 11 0 0 0-4.94 4.05m13.36-4.05a11 11 0 0 1 4.94 4.05M12 9v5l3 3\"/>",
    "alarm_add": "<circle cx=\"12\" cy=\"14\" r=\"8\"/><path d=\"M7.79 3.84a11 11 0 0 0-4.94 4.05m13.36-4.05a11 11 0 0 1 4.94 4.05M12 10v8m-4-4h8\"/>",
    "alarm_off": {
        "path": "<path d=\"M2 4l18 18\"/><circle cx=\"12\" cy=\"14\" r=\"8\"/><path d=\"M4.22 6.22a11 11 0 0 0-1.37 1.67m13.36-4.05a11 11 0 0 1 4.94 4.05\"/>",
        "mask": "<path d=\"M.75 0l24 24\" stroke=\"#000\"/>"
    },
    "align_center": "<path d=\"M4 6h16M6 10h12M4 14h16M5.5 18h13\"/>",
    "align_justify": "<path d=\"M4 6h16M4 10h16M4 14h16M4 18h16\"/>",
    "align_left": "<path d=\"M4 6h16M4 10h12M4 14h16M4 18h13\"/>",
    "align_right": "<path d=\"M4 6h16M8 10h12M4 14h16M7 18h13\"/>",
    "apple": "<path d=\"M10 22c2-1 3-1 5 0 3 1 5-5 5-5-3-3-3-5-.5-8C17 6 13 7 12 8c-1-1-8-3-8 5 0 5 4 10 6 9zm2-15c0-3 2-5 4-5 0 3-2 5-4 5\"/>",
    "arrow_down": "<path d=\"M6 12l6 6 6-6m-6-6v12\"/>",
    "arrow_left": "<path d=\"M12 6l-6 6 6 6m-6-6h12\"/>",
    "arrow_right": "<path d=\"M12 6l6 6-6 6m-6-6h12\"/>",
    "arrow_up": "<path d=\"M6 12l6-6 6 6m-6-6v12\"/>",
    "battery": "<path d=\"M10 4h4M8 20h8V7H8z\"/>",
    "battery_low": "<path d=\"M10 4h4M8 20h8V7H8zM12 9v6m0 1v2\"/>",
    "bell": "<path d=\"M4 19q2 0 2-5 0-9 6-9t6 9q0 5 2 5zm6 0a2 2 0 0 0 4 0\"/>",
    "bell_off": {
        "path": "<path d=\"M2 2l20 20M4 19q2 0 2-5 0-9 6-9t6 9q0 5 2 5zm6 0a2 2 0 0 0 4 0\"/>",
        "mask": "<path stroke=\"#000\" d=\"M2.75 0l24 24\"/>"
    },
    "bell_ringing": "<path d=\"M4 19q2 0 2-5 0-9 6-9t6 9q0 5 2 5zm6 0a2 2 0 0 0 4 0M5 5q-1.5 2-2.25 7M19 5q1.5 2 2.25 7\"/>",
    "bitcoin": "<path d=\"M8 6h5c4 0 4 6 0 6H8zm0 6h6c4 0 4 6 0 6H8zm2-6V3m3 3V3m-3 15v3m3-3v3\"/>",
    "bluetooth": "<path d=\"M7 7l10 10-5 5V2l5 5L7 17\"/>",
    "bluetooth_off": {
        "path": "<path d=\"M2 2l20 20M7 7l10 10-5 5V2l5 5L7 17\"/>",
        "mask": "<path stroke=\"#000\" d=\"M2.75 0l24 24\"/>"
    },
    "book": "<path d=\"M3 6c3-1 7-1 9 0 2-1 6-1 9 0v13c-3-1-7-1-9 0-2-1-6-1-9 0zm9 12V6\"/>",
    "bookmark": "<path d=\"M6 2h12v20l-6-4-6 4z\"/>",
    "bus": "<path d=\"M5 4h14v14H5zm2 14v3H6v-3m11 0v3h1v-3M5 12h14M7 15h2m8 0h-2\"/>",
    "cable_car": "<path d=\"M6 11q0-2 2-2h8q2 0 2 2v7q0 2-2 2H8q-2 0-2-2zm0 5h12M12 4v12M5 5l14-2\"/>",
    "calendar": "<path d=\"M4 6h16v14H4zm0 4h16M8 3v5m8-5v5\"/>",
    "camera": "<path d=\"M3 7h5l2-2h4l2 2h5v12H3z\"/><circle cx=\"12\" cy=\"12.5\" r=\"3\"/>",
    "car": "<path d=\"M5 11l3-6h8l3 6v6H5zm1 6v2H5v-2m13 0v2h1v-2M5 11h14M7 14h2m8 0h-2\"/>",
    "cart": "<path d=\"M2 4h3l2 12h13l1-9H6\"/><circle cx=\"9\" cy=\"19\" r=\"2\"/><circle cx=\"18\" cy=\"19\" r=\"2\"/>",
    "cart_add": "<path d=\"M2 4h3l2 12h13l1-9H6m5 4.5h5M13.5 9v5\"/><circle cx=\"9\" cy=\"19\" r=\"2\"/><circle cx=\"18\" cy=\"19\" r=\"2\"/>",
    "cart_clear": "<path d=\"M2 4h3l2 12h13l1-9H6m5.5 2.5l4 4m-4 0l4-4\"/><circle cx=\"9\" cy=\"19\" r=\"2\"/><circle cx=\"18\" cy=\"19\" r=\"2\"/>",
    "cart_remove": "<path d=\"M2 4h3l2 12h13l1-9H6m5 4.5h5\"/><circle cx=\"9\" cy=\"19\" r=\"2\"/><circle cx=\"18\" cy=\"19\" r=\"2\"/>",
    "cash": "<path d=\"M2 6.5h20v11H2zM2 10q3 0 3-3m-3 7q3 0 3 3m17-7q-3 0-3-3m3 7q-3 0-3 3M6 12h2m8 0h2\"/><ellipse cx=\"12\" cy=\"12\" rx=\"1.5\" ry=\"2\"/>",
    "cd": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M9.7 6.46A6 6 0 0 0 6 12m8.3 5.54A6 6 0 0 0 18 12\"/>",
    "chat": "<path d=\"M4 4h16v11H8l-4 5z\"/>",
    "check": "<path d=\"M4 12l5 5L20 6\"/>",
    "cheveron_down": "<path d=\"M6 9l6 6 6-6\"/>",
    "cheveron_left": "<path d=\"M15 6l-6 6 6 6\"/>",
    "cheveron_right": "<path d=\"M9 6l6 6-6 6\"/>",
    "cheveron_up": "<path d=\"M6 15l6-6 6 6\"/>",
    "clipboard": "<path d=\"M16 4h3v17H5V4h3m1-1v3h6V3z\"/>",
    "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 4\"/>",
    "cloud": "<path d=\"M18 19a4 4 0 1 0 0-8 5.5 5.5 0 0 0-11-1 4.5 4.5 0 1 0 0 9z\"/>",
    "cloud_download": "<path d=\"M18 17a4 4 0 1 0 0-8A5.5 5.5 0 0 0 7 8a4.5 4.5 0 1 0-1.1 9H6m6-5v10m-4-4l4 4 4-4\"/>",
    "cloud_off": {
        "path": "<path d=\"M2 2l20 20M18 19a4 4 0 1 0 0-8 5.5 5.5 0 0 0-11-1 4.5 4.5 0 1 0 0 9z\"/>",
        "mask": "<path stroke=\"#000\" d=\"M2.75 0l24 24\"/>"
    },
    "cloud_upload": "<path d=\"M18 17a4 4 0 1 0 0-8A5.5 5.5 0 0 0 7 8a4.5 4.5 0 1 0-1.1 9H6m6-5v10m-4-6l4-4 4 4\"/>",
    "code": "<path d=\"M7 7l-5 5 5 5M17 7l5 5-5 5m-8 2l6-14\"/>",
    "codepen": "<path d=\"M12 2l10 7v6l-10 7-10-7V9zM2 9l10 6 10-6M2 15l10-6 10 6M12 2v7.5m0 5.5v7\"/>",
    "copy": "<path d=\"M8 4h10v13H8zM5 5v15h12\"/>",
    "copyright": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M16 9a5 5 0 1 0 0 6\"/>",
    "credit_card": "<path d=\"M4 6h16v12H4zm0 4h16\"/>",
    "crop": "<path d=\"M6 2v16h16M2 6h4m12 16v-4M8 6h10v10\"/>",
    "data": "<path d=\"M4 20h16V4z\"/>",
    "data_off": {
        "path": "<path d=\"M2 2l20 20M4 20h16V4z\"/>",
        "mask": "<path stroke=\"#000\" d=\"M2.75 0l24 24\"/>"
    },
    "disc": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
    "discussion": "<path d=\"M4 7Q3 7 3 8v13l4-5h7q1 0 1-1m6-12v14l-4-4H6V3z\"/>",
    "divide": "<path d=\"M6 12h12m-7-5h2m-2 10h2\"/>",
    "doughnut_chart": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 2v8m2 2h8m-8.5 2l4.5 6\"/>",
    "download": "<path d=\"M3 20h18M6 10l6 6 6-6m-6-7v13\"/>",
    "download_done": "<path d=\"M4 12l5 5L20 6M3 20h18\"/>",
    "edit": "<path d=\"M4.5 19.5L5 16 16 5l3 3L8 19z\"/>",
    "euro": "<path d=\"M17 4c-6-1-9 3-9 8s3 9 9 8M6 10.5h8m-8 3h8\"/>",
    "facebook": "<path d=\"M16 22h6V2H2v20h11v-8h-3v-3h3c-.5-6 2-6 6-6v3c-3 0-3 0-3 3h3l-.5 3H16z\"/>",
    "fast_forwards": "<path d=\"M3 6v12l9-6zm9 0v12l9-6z\"/>",
    "fast_rewind": "<path d=\"M21 6v12l-9-6zm-9 0v12l-9-6z\"/>",
    "file": "<path d=\"M4 2h10l6 6v14H4z\"/>",
    "file_add": "<path d=\"M4 2h10l6 6v14H4zm8 17v-8m-4 4h8\"/>",
    "file_clear": "<path d=\"M4 2h10l6 6v14H4zm5 10l6 6m-6 0l6-6\"/>",
    "file_remove": "<path d=\"M4 2h10l6 6v14H4zm4 13h8\"/>",
    "file_text": "<path d=\"M4 2h10l6 6v14H4zm3 16h10M7 14h10M7 10h10M7 6h6\"/>",
    "film_camera": "<path d=\"M4 11h12v8H4zm12 3l4-3v8l-4-3\"/><circle cx=\"7\" cy=\"7\" r=\"3\"/><circle cx=\"13\" cy=\"7\" r=\"3\"/>",
    "filter": "<path d=\"M4 4h16l-6 8v8l-4-2v-6z\"/>",
    "folder": "<path d=\"M4 19h16V7h-7l-1-2H4z\"/>",
    "folder_add": "<path d=\"M4 19h16V7h-7l-1-2H4zm8-3v-6m-3 3h6\"/>",
    "folder_open": "<path d=\"M19 10V7h-7l-1-2H3v14h13M3 19l3-8h16l-3 8h-3\"/>",
    "folder_remove": "<path d=\"M4 19h16V7h-7l-1-2H4zm5-6h6\"/>",
    "forbidden": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M5 5l14 14\"/>",
    "fullscreen": "<path d=\"M8 4H4v4m12-4h4v4M4 16v4h4m8 0h4v-4\"/>",
    "game_controler": "<path d=\"M2 7h20v10H2zm3 5h6M8 9v6m6-2h2m1-2h2\"/>",
    "github": "<path d=\"M8.5 23v-5c0-1 .5-2 1-2.5-3 0-6-1.5-6-6.5 0-1.5.5-2.5 1.5-3.5C5 5.5 4.5 4 5 2c0 0 1-.5 3.5 1.5C9.5 3 11 3 12 3s2 0 3.5.5C18 1.5 19 2 19 2c.5 2 0 3.5 0 3.5 1 1 1.5 2 1.5 3.5 0 5-3 6.5-6 6.5.5.5 1 1.5 1 2.5v5M9 20c-5 1-3-4-7-4\"/>",
    "gitlab": "<path d=\"M12 21L2 14 5.7 3l2.8 7h7l2.8-7L22 14z\"/>",
    "heart": "<path d=\"M19.18 12.18L12 19.36l-7.18-7.18A4.5 4.5 0 1 1 12 6.5a4.5 4.5 0 1 1 7.18 5.68z\"/>",
    "help": "<path d=\"M9 10a3 3 0 1 1 3 3v2m0 1v2\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/>",
    "history": "<path d=\"M3.52 15v.3a9 9 0 1 0 2.12-9.66L3 8m6 0H3V2m9 4v6l4 4\"/>",
    "home": "<path d=\"M6 10v10h12V10M3 13l9-9 9 9m-11 7v-8h4v8\"/>",
    "hospital": "<path d=\"M9 4h6v5h5v6h-5v5H9v-5H4V9h5z\"/>",
    "image": "<path d=\"M4 4v16h16V4zm0 12l4-4 8 8m-5-5l5-5 4 4M8 8h2\"/>",
    "incognito": "<path d=\"M4 12h16M7 12l1.5-7L12 6l3.5-1 1.5 7m-7 5c1-1 3-1 4 0\"/><circle cx=\"8\" cy=\"17\" r=\"2\"/><circle cx=\"16\" cy=\"17\" r=\"2\"/>",
    "info": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 16v-5m0-3v2\"/>",
    "instagram": "<circle cx=\"12\" cy=\"12\" r=\"5\"/><circle cx=\"18\" cy=\"6\" r=\".4\"/><path d=\"M8 2h8c4 0 6 2 6 6v8c0 4-2 6-6 6H8c-4 0-6-2-6-6V8c0-4 2-6 6-6z\"/>",
    "invisible": {
        "path": "<path d=\"M2 2l20 20M12 10a2 2 0 1 0 2 2\"/><path d=\"M4 12q8-10 16 0-8 10-16 0z\"/>",
        "mask": "<path stroke=\"#000\" d=\"M2.75 0l24 24\"/>"
    },
    "justice": "<path d=\"M8 20h8zm4 0V3M5 7h2c3-2 7-2 10 0h2M3 15l2-8 2 8zm14 0l2-8 2 8z\"/>",
    "key": "<circle cx=\"6\" cy=\"12\" r=\"3.5\"/><path d=\"M10 12h12m0 2h-4\"/>",
    "lab": "<path d=\"M9 4h6l-1 2v6l5 8H5l5-8V6z\"/>",
    "language": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><ellipse cx=\"12\" cy=\"12\" rx=\"4\" ry=\"10\"/><path d=\"M3 8h18M3 16h18\"/>",
    "laptop": "<path d=\"M5 6h14v9H5zM2 18h20\"/>",
    "layout_fluid": "<path d=\"M2 2h8v11H2zm12 0h8v6h-8zM2 17h8v5H2zm12-5h8v10h-8z\"/>",
    "layout_grid": "<path d=\"M2 2h8v8H2zm12 0h8v8h-8zM2 14h8v8H2zm12 0h8v8h-8z\"/>",
    "library": "<path d=\"M4 4v16M8 7v13m4-14v14m4-14l4 14\"/>",
    "lightbulb": "<path d=\"M9 20h6m-5-3h4v-3a5.17 5.17 0 1 0-4 0z\"/>",
    "lightning": "<path d=\"M7 4v10h4v6l5-10h-5l2-6z\"/>",
    "lightning_off": {
        "path": "<path d=\"M2 2l20 20M7 4v10h4v6l5-10h-5l2-6z\"/>",
        "mask": "<path stroke=\"#000\" d=\"M2.75 0l24 24\"/>"
    },
    "link": "<path d=\"M10 14l4-4m-3-1l3-3a1 1 0 0 1 4 4l-3 3m-6-2l-3 3a1 1 0 0 0 4 4l3-3\"/>",
    "link_external": "<path d=\"M12 12l8-8m-6 0h6v6m-8-6H4v16h16v-8\"/>",
    "list": "<path d=\"M4 8h2m2 0h12M4 12h2m2 0h12M4 16h2m2 0h12\"/>",
    "location": "<path d=\"M12 20l5-6a6.5 6.5 0 1 0-10 0z\"/><circle cx=\"12\" cy=\"10\" r=\"1.5\"/>",
    "location_add": "<path d=\"M12 20l5-6a6.5 6.5 0 1 0-10 0zM9 10h6m-3-3v6\"/>",
    "location_off": {
        "path": "<path d=\"M2 2l20 20M12 20l5-6a6.5 6.5 0 1 0-10 0z\"/>",
        "mask": "<path stroke=\"#000\" d=\"M2.75 0l24 24\"/>"
    },
    "location_remove": "<path d=\"M12 20l5-6a6.5 6.5 0 1 0-10 0zM9 10h6\"/>",
    "lock": "<path d=\"M4 12h16v10H4zm8 3.5v3M6 11V8a6 6 0 0 1 12 0v3\"/>",
    "lock_off": {
        "path": "<path d=\"M2 2l20 20M4 12h16v10H4zm8 3.5v3M6 11V8a6 6 0 0 1 12 0v3\"/>",
        "mask": "<path stroke=\"#000\" d=\"M2.75 0l24 24\"/>"
    },
    "lock_open": "<path d=\"M4 12h16v10H4zm8 3.5v3M6 8a6 6 0 0 1 12 0v3\"/>",
    "mail": "<path d=\"M4 6h16v12H4zm0 0l8 6 8-6\"/>",
    "mail_open": "<path d=\"M20 9v12H4V9m0 0l8 6 8-6-8-6z\"/>",
    "menu": "<path d=\"M4 6h16M4 12h16M4 18h16\"/>",
    "minimise": "<path d=\"M8 4v4H4m12-4v4h4M4 16h4v4m8 0v-4h4\"/>",
    "minus": "<path d=\"M4 12h16\"/>",
    "minus_circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M7 12h10\"/>",
    "money": "<path d=\"M15.5 9c0-4-7-4-7 0s7 2 7 6-7 4-7 0M12 3v3m0 15v-3\"/>",
    "money_off": {
        "path": "<path d=\"M2 2l20 20M15.5 9c0-4-7-4-7 0s7 2 7 6-7 4-7 0M12 3v3m0 15v-3\"/>",
        "mask": "<path stroke=\"#000\" d=\"M2.75 0l24 24\"/>"
    },
    "monitor": "<path d=\"M4 5h16v10H4zm3 14h10m-5 0v-3\"/>",
    "move": "<path d=\"M6 8l-4 4 4 4m12-8l4 4-4 4M2 12h20M8 6l4-4 4 4M8 18l4 4 4-4M12 2v20\"/>",
    "move_h": "<path d=\"M6 8l-4 4 4 4m12-8l4 4-4 4M2 12h20\"/>",
    "move_v": "<path d=\"M8 6l4-4 4 4M8 18l4 4 4-4M12 2v20\"/>",
    "mug": "<path d=\"M5 5v12q0 2 2 2h6q2 0 2-2V5zm10 3h4v7h-4\"/>",
    "music": "<path d=\"M8 18V6l11-2v12M8 9l11-2\"/><circle cx=\"6\" cy=\"18\" r=\"2\"/><circle cx=\"17\" cy=\"16\" r=\"2\"/>",
    "olympics": "<circle cx=\"6\" cy=\"10\" r=\"3\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><circle cx=\"18\" cy=\"10\" r=\"3\"/><circle cx=\"9\" cy=\"14\" r=\"3\"/><circle cx=\"15\" cy=\"14\" r=\"3\"/>",
    "pause": "<path d=\"M8 6v12m8-12v12\"/>",
    "person": "<circle cx=\"12\" cy=\"8.5\" r=\"4\"/><path d=\"M5 20a8 8 0 0 1 14 0\"/>",
    "phone": "<path d=\"M6 11l3-3-1-4H4c0 9 7 16 16 16v-4l-4-1-3 3\"/>",
    "phone_down": "<path d=\"M8 10v3l-3.5 2.5-2-2.5C8 8 16 8 21.5 13l-2 2.5L16 13v-3\"/>",
    "phone_off": {
        "path": "<path d=\"M22 2L2 22M6 11l3-3-1-4H4c0 9 7 16 16 16v-4l-4-1-3 3\"/>",
        "mask": "<path stroke=\"#000\" d=\"M21.25 0l-24 24\"/>"
    },
    "pie_chart": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 2v10h10m-10 0l6 8\"/>",
    "play": "<path d=\"M7.5 6v12l9-6z\"/>",
    "plus": "<path d=\"M4 12h16m-8-8v16\"/>",
    "plus_circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 7v10m-5-5h10\"/>",
    "pound": "<path d=\"M16 8a4 4 0 0 0-8 0v6q0 6-2 6h12M6 12h6\"/>",
    "power": "<path d=\"M8 5.07a8 8 0 1 0 8 0M12 2v10\"/>",
    "print": "<path d=\"M17 17h3v-6q0-2-2-2H6q-2 0-2 2v6h3m1-3v6h8v-6m-9-.5h10M8 8V4h8v4\"/>",
    "recording": "<path d=\"M2 5h20v14H2zm6 9h8\"/><circle cx=\"8\" cy=\"12\" r=\"2\"/><circle cx=\"16\" cy=\"12\" r=\"2\"/>",
    "refresh_ccw": "<path d=\"M3.16 15a9 9 0 0 0 15.2 3.36L21 16m-6 0h6v6M20.48 9A9 9 0 0 0 5.64 5.64L3 8m6 0H3V2\"/>",
    "refresh_cw": "<path d=\"M3.16 9a9 9 0 0 1 15.2-3.36L21 8m-6 0h6V2M20.48 15a9 9 0 0 1-14.84 3.36L3 16m6 0H3v6\"/>",
    "rotate_ccw": "<path d=\"M3.52 15v.3a9 9 0 1 0 2.12-9.66L3 8m6 0H3V2\"/>",
    "rotate_cw": "<path d=\"M20.48 15v.3a9 9 0 1 1-2.12-9.66L21 8m-6 0h6V2\"/>",
    "save": "<path d=\"M4 4h12l4 4v12H4zm4 0v6h8V4\"/><circle cx=\"12\" cy=\"15\" r=\"2\"/>",
    "school": "<path d=\"M2 10l10-5 10 5-10 5zm20 0v9M6 12v3.5l6 3 6-3V12\"/>",
    "search": "<circle cx=\"15\" cy=\"9\" r=\"6\"/><path d=\"M3 21l8-8\"/>",
    "send": "<path d=\"M4 4l16 8-16 8 3-8zm3 8h13\"/>",
    "settings": "<path d=\"M14.59 2.34l.91 3.6 3.57-1.01 2.59 4.48L19 12l2.66 2.59-2.59 4.48-3.57-1.01-.91 3.6H9.41l-.91-3.6-3.57 1.01-2.59-4.48L5 12 2.34 9.41l2.59-4.48L8.5 5.94l.91-3.6z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
    "share": "<path d=\"M16 7l-8 4m0 2l8 4\"/><circle cx=\"6\" cy=\"12\" r=\"2\"/><circle cx=\"18\" cy=\"6\" r=\"2\"/><circle cx=\"18\" cy=\"18\" r=\"2\"/>",
    "shield": "<path d=\"M5 7q0 10 7 14 7-4 7-14-3 0-7-3-4 3-7 3z\"/>",
    "shield_off": {
        "path": "<path d=\"M2 2l20 20M5 7q0 10 7 14 7-4 7-14-3 0-7-3-4 3-7 3z\"/>",
        "mask": "<path stroke=\"#000\" d=\"M2.75 0l24 24\"/>"
    },
    "sigma": "<path d=\"M17 8V6H7l4 6-4 6h10v-2\"/>",
    "skip": "<path d=\"M6.5 5v14m11-13v12l-9-6z\"/>",
    "skip_back": "<path d=\"M17.5 5v14M6.5 6v12l9-6z\"/>",
    "sliders": "<path d=\"M4 6h9m4 0h3m-6-2.5v5M4 12h4m4 0h8M9 9.5v5M4 18h9m4 0h3m-6-2.5v5\"/>",
    "smartphone": "<path d=\"M7 4h10v16H7zm3 13h4\"/>",
    "snapchat": "<path d=\"M12 21.5c4-.5 2-2.5 7-2l.5-1.5c1.5 1 2.5-1 2.5-1-2 0-4.5-4-4.5-4l2.5-2c.5-1-1-2-3 0V8c0-2-1-5-5-5S7 6 7 8v3c-2-2-3.5-1-3 0l2.5 2S4 17 2 17c0 0 1 2 2.5 1l.5 1.5c5-.5 3 1.5 7 2z\"/>",
    "speaker": "<path d=\"M6 4h12v16H6zm5 3.5h2\"/><circle cx=\"12\" cy=\"14\" r=\"3\"/>",
    "star": "<path d=\"M12 4l2.35 4.76 5.26.77-3.81 3.71.9 5.23L12 16l-4.7 2.47.9-5.23-3.81-3.71 5.26-.77z\"/>",
    "stop": "<path d=\"M6 6h12v12H6z\"/>",
    "tablet": "<path d=\"M5 3h14v18H5zm5 15h4\"/>",
    "tag": "<path d=\"M4 14l6 6 10-10V4h-6zm11-6h2\"/>",
    "terminal": "<path d=\"M3 5h18v14H3zm3 3l4 4-4 4m6-1h6\"/>",
    "times": "<path d=\"M6 6l12 12M6 18L18 6\"/>",
    "times_circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 8l8 8m-8 0l8-8\"/>",
    "train": "<path d=\"M5 6q0-2 2-2h10q2 0 2 2v12H5zm0 6h14M7 15h2m8 0h-2m-3-3V4M8 18l-4 5m12-5l4 5M6 21h12\"/>",
    "trash": "<path d=\"M7 7l1 13h8l1-13M4 7h16M9 6V4h6v2\"/>",
    "trash_empty": "<path d=\"M7 7l1 13h8l1-13M4 7h16M9 6V4h6v2m-5 6l4 4m-4 0l4-4\"/>",
    "truck": "<path d=\"M3 6h12v10H9m-4 0H3V6h2m14 10h2v-4l-4-4h-2\"/><circle cx=\"7\" cy=\"16\" r=\"2\"/><circle cx=\"17\" cy=\"16\" r=\"2\"/>",
    "twitter": "<path d=\"M1 19c7 5 20 1 20-12 0 0 2-1 2-2l-2.7.5 2.2-2s-2.5 1.5-3 1C17 1 10 3 12 9 8 9 3 6 2.5 4 1 4 2 10 4 10L2 9c0 3 2 5 4 5H3.5C3 16 7 17 8 17c0 1-4 2-7 2z\"/>",
    "upload": "<path d=\"M3 20h18M6 10l6-6 6 6m-6-6v13\"/>",
    "visible": "<circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M4 12q8-10 16 0-8 10-16 0z\"/>",
    "vr": "<circle cx=\"8\" cy=\"12\" r=\"2\"/><circle cx=\"16\" cy=\"12\" r=\"2\"/><path d=\"M3 6v12h7l2-2 2 2h7V6z\"/>",
    "warning": "<path d=\"M2 20h20L12 2.68zM12 9v5m0 1v2\"/>",
    "warning_circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 7v7m0 1v2\"/>",
    "watch": "<circle cx=\"12\" cy=\"12\" r=\"6\"/><path d=\"M7.5 8L9 2h6l1.5 6m-9 8L9 22h6l1.5-6M12 8.5V12l2 2\"/>",
    "weights": "<path d=\"M6 12h12M6 7v10M3 9v6m15-8v10m3-8v6\"/>",
    "wifi": "<path d=\"M12 19L22 9A14.14 14.14 0 0 0 2 9z\"/>",
    "wifi_off": {
        "path": "<path d=\"M2 2l20 20M12 19L22 9A14.14 14.14 0 0 0 2 9z\"/>",
        "mask": "<path stroke=\"#000\" d=\"M2.75 0l24 24\"/>"
    },
    "windows": "<path d=\"M4 7l16-3v16L4 17zm0 5h16m-8.5-7v14\"/>",
    "youtube": "<path d=\"M21.5 7A3 3 0 0 0 20 5.5C18.5 5 12 5 12 5s-6 0-8 .5A3 3 0 0 0 2.5 7a31 31 0 0 0-.5 5 31 31 0 0 0 .5 5A3 3 0 0 0 4 18.5c1.5.5 8 .5 8 .5s6.5 0 8-.5a3 3 0 0 0 1.5-1.5 31 31 0 0 0 .5-5 31 31 0 0 0-.5-5zM10 15V9l5 3z\"/>",
    "zip": "<path d=\"M4 2h10l6 6v14H4zm4 1v2m2 0v2M8 7v2m2 0v2m-2 0v2m2 0v2m-2 0v2\"/>",
    "zoom_in": "<circle cx=\"15\" cy=\"9\" r=\"6\"/><path d=\"M3 21l8-8m1-4h6m-3-3v6\"/>",
    "zoom_out": "<circle cx=\"15\" cy=\"9\" r=\"6\"/><path d=\"M3 21l8-8m1-4h6\"/>"
}
},{}],2:[function(require,module,exports){
const icons = require('../dist/icons.json');
const defaults = {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linejoin": "round"
}

/* =============================================================================
 * Define icon class, which will generate icons from JSON
 * ========================================================================== */


module.exports = class Icon {

    /**
     * Get necessary info about icon
     * @param  {string} name Icon name
     * @return {object}      contains name, path and attributes
     */

    constructor(name) {

        if (icons[name] == undefined) {
            console.error(`No icon with name: ${name}`);
            return null
        }

        this.name = name
        this.attr = defaults
		if (typeof icons[name] == 'string') {
			this.path = icons[name]
		} else {
			this.path = `<defs><mask id="mask-${name}"><rect width="100%" height="100%" fill="white"/>${icons[name].mask}</mask></defs><g mask="url(#mask-${name})">${icons[name].path}</g>`
		}
    }

    /**
     * Generate an icon's SVG
	 * @param  {object}      attr Attributes to add to SVG
     * @return {HTMLElement}      HTMLElement of SVG
     */

    toSVG(attr) {
        if (typeof document === 'undefined') {
            throw new Error('Icon.toSVG() only works in the browser.')
        }

        attr = Object.assign({}, this.attr, attr)
        if (attr.class) attr.class += ' lunar-icons'
        else attr.class = 'lunar-icons'

        let attributes = ''
        for (let a in attr) attributes += `${a}="${attr[a]}" `

        let str = `<svg ${attributes}>${this.path}</svg>`

        let svg = new DOMParser().parseFromString(str,'image/svg+xml')
        let element = svg.querySelector('svg')

        return element
    }

    /**
     * Output path
     * @return {string} path
     */

    toString() {
        return this.toSVG().toString()
    }
}

},{"../dist/icons.json":1}],3:[function(require,module,exports){
const icon = require('./icon.js')
const icons = Object.keys( require('../dist/icons.json') )

require('./web-components.js')()

/* =============================================================================
 * Function used to replace icons by svg
 * ========================================================================== */

/**
 * Replace all <i> tags by svgs
 */

let replace = () => {

    if (typeof document === 'undefined') {
        throw new Error('Replacing icons only works in the browser.')
    }

    if (!document.body.classList.contains('lunar')) {
        document.head.innerHTML += `<style>
            .lunar-icons {width: 1em; min-width: 1em; height: 1em; min-height: 1em}
            </style>`
        document.body.classList.add('lunar')
    }

    let iconElements = document.querySelectorAll('i[data-icon]')

    Array.from(iconElements).forEach(i => {
        let name = i.getAttribute('data-icon')

        if (icons.indexOf(name) > -1) {
            attr = {}
            if (i.id != '') attr.id = i.id
            if (i.classList.contains('lunar-icons')) i.classList.remove('lunar-icons')
            if (i.classList.length > 0) attr.class = i.classList.toString()

            i.parentNode.replaceChild(new icon(name).toSVG(attr), i);
        }

    })
}

window.lunarIcons = { icon, icons, replace }

document.addEventListener('DOMContentLoaded', lunarIcons.replace)

},{"../dist/icons.json":1,"./icon.js":2,"./web-components.js":4}],4:[function(require,module,exports){
const icon = require('../src/icon.js');
const icons = Object.keys( require('../dist/icons.json') );

const createCustomEl = () => {

	let script = document.createElement('script')
	script.src = 'https://unpkg.com/@webcomponents/custom-elements@1.1.0/custom-elements.min.js'

	document.head.append(script)

	if (!document.body.classList.contains('lunar')) {
		document.head.innerHTML += `<style>
		.lunar-icons {width: 1em; min-width: 1em; height: 1em; min-height: 1em}
		</style>`
		document.body.classList.add('lunar')
	}

	script.onload = () => {
		class Lunar extends HTMLElement {
			static get observedAttributes() {
				return ['icon'];
			}

			get icon() {
				return this.getAttribute('icon')
			}

			set icon(val) {
				this.setAttribute('icon', val)
				this.setSVG()
			}

			constructor() {
				super();
			}

			attributeChangedCallback(i,o,n) {
				this.setSVG(n);
			}

			setSVG(a) {
				let iconName =  a ? a : this.icon;
				this.innerHTML = '';
				this.append(new icon(iconName).toSVG())
			}
		}
		customElements.define('lunar-icon', Lunar);
	}

	window.lunarIcons = { icon, icons }

}

module.exports = createCustomEl;

},{"../dist/icons.json":1,"../src/icon.js":2}]},{},[3]);
