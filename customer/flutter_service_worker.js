'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "503afaa949099ffc230356a4ce12cc42",
"assets/assets/image/flower/flower_1.png": "ae1d797cc27846276b3b3e0ca1f373bf",
"assets/assets/image/flower/flower_10.png": "dd7a5805f4e673ea28339ac4fa758f2f",
"assets/assets/image/flower/flower_11.png": "0bb692279e994a1680db1c4b64cdad9c",
"assets/assets/image/flower/flower_12.png": "62e27f7c05e7be2f82e6b3fe559fbe7c",
"assets/assets/image/flower/flower_13.png": "08a5f36c87d12adf618c645f638d3e95",
"assets/assets/image/flower/flower_14.png": "b837f8970f7411b03c50613a1fec67db",
"assets/assets/image/flower/flower_15.png": "0a800fc0b09b4523f82c8b1332280f06",
"assets/assets/image/flower/flower_16.png": "2a1fb98afd19298fa3b73855b514e655",
"assets/assets/image/flower/flower_2.png": "db9fb7cf225dd22349e209edb2b59aa8",
"assets/assets/image/flower/flower_3.png": "ff1f33afa93b090625abb55f8cd9c2c9",
"assets/assets/image/flower/flower_4.png": "de002325ea64ec96ccb59160e0e4b10a",
"assets/assets/image/flower/flower_5.png": "c4c2b01c4d7653089bcb8028904b1692",
"assets/assets/image/flower/flower_6.png": "08976820c97c149e5a2e738c38685d7f",
"assets/assets/image/flower/flower_7.png": "07fd56e2fcef881236eecc9f53449cec",
"assets/assets/image/flower/flower_8.png": "8ab1c153c461e90c1ce4c80692076dc0",
"assets/assets/image/flower/flower_9.png": "196170173b0b65e0d848acd833d95ae8",
"assets/assets/image/store/1_1.jpg": "d472454cf8d91a6aa89d27aca1893a1f",
"assets/assets/image/store/1_2.jpg": "d1dd4c811a0476269f42aa25947b69cb",
"assets/assets/image/store/1_3.jpg": "2365437918f7b358e4051f6b22d2a8c1",
"assets/assets/image/store/1_4.jpg": "5dbad39c83fa3f54d3063de978ef99a2",
"assets/assets/image/store/1_5.jpg": "4705913a862bb87f6fd0eced060df3d7",
"assets/assets/image/store/2_1.jpg": "6529db3c6641b2ffdad8dfc5c3fa5821",
"assets/assets/image/store/2_2.jpg": "712c56808ff4b67d9ffd6ab608c33380",
"assets/assets/image/store/2_3.jpg": "43aff53d7a946d9dc2ec9336e5b1d47f",
"assets/assets/image/store/2_4.jpg": "760670c0f3f1b2e9fdf1fda7dbe765b7",
"assets/assets/image/store/2_5.jpg": "28dc2380829359e080fac1040dfaa0af",
"assets/assets/image/store/2_6.jpg": "56710a621400425d46619f17ef55ba97",
"assets/assets/image/store/3_1.jpg": "03d86721efc2d4306625fd5caba114ef",
"assets/assets/image/store/3_10.jpg": "b281f447e1683cfb4201724ba8833691",
"assets/assets/image/store/3_11.jpg": "f2d71fc65670be95e871931e5f93be15",
"assets/assets/image/store/3_12.jpg": "a9dd524330c43cecc49a55a540f9a97c",
"assets/assets/image/store/3_2.jpg": "4835535060e1fc2eafdae86e48233892",
"assets/assets/image/store/3_3.jpg": "37569a8795a4d088090290f99183ce13",
"assets/assets/image/store/3_4.jpg": "1dbdf6085b5e2145ee9f302d24e6dd23",
"assets/assets/image/store/3_5.jpg": "f51dadecefe73438a2e8f85fb765b47d",
"assets/assets/image/store/3_6.jpg": "2af77d278be755039d0f953d5f264995",
"assets/assets/image/store/3_7.jpg": "58c459b99d5036611ac330eb21702e84",
"assets/assets/image/store/3_8.jpg": "0686b4b7423740821a21f1e31f7799ec",
"assets/assets/image/store/3_9.jpg": "ca7d17623417372e5d454a1aa3e48167",
"assets/assets/image/store/4_1.jpg": "516efdbb48da8c56ced9032375d8a418",
"assets/assets/image/store/4_2.jpg": "707863fe8b7b0185f4adf8357edb3a8d",
"assets/assets/image/store/4_3.jpg": "38d56d8887b0a27cc82d1503ddf3d4ea",
"assets/assets/image/store/4_4.jpg": "406fea034609f13bb9601493869bf1f4",
"assets/assets/image/store/4_5.jpg": "58b6f331485814377ea94bcad3097b2d",
"assets/assets/image/store/4_6.jpg": "95d139c41784770a6576a9dcee88d4a0",
"assets/assets/image/store/4_7.jpg": "7787067b7a561385f8e9a79155b4def5",
"assets/assets/image/store/5_1.jpg": "a6094d7b8da8612387df6f0e324705cb",
"assets/assets/image/store/5_2.jpg": "59d4acbd2353f7ae90048fef6c58db80",
"assets/assets/image/store/5_3.jpg": "412f373dac786f68d7addbcf5f1a9cde",
"assets/assets/image/store/5_5.jpg": "b84bc4b28ae4d9f58b565273ac6c7541",
"assets/assets/image/store/5_6.jpg": "e010820c226aab79e06b57aa9577f364",
"assets/assets/image/store/6_1.jpg": "fc493ce5292db50f6b591c7961a2e095",
"assets/assets/image/store/6_2.jpg": "fdb1c350a9bd1fa6d369fd211945ef95",
"assets/assets/image/store/6_3.jpg": "4453867d4e65eecbf92411e7d02e1c4c",
"assets/assets/image/store/6_4.jpg": "4e48f5ff2cc5c49446858c652f49ecba",
"assets/assets/image/store/6_5.jpg": "46b8731dd9bee54f84268f0e5627d519",
"assets/assets/image/store/6_6.jpg": "f9c02db5dcd344ce67e89c6c79f740d5",
"assets/assets/image/store/6_7.jpg": "5c2056b9bd315a4def758399dd830691",
"assets/assets/image/store/6_8.jpg": "67e90e153505a16afaecc073ce4e836b",
"assets/assets/image/store/6_9.jpg": "3ab887ac96610b93c7b091068b83ae74",
"assets/assets/image/store/7_1.jpg": "3f20e06f090c927437e99e6c1fe34845",
"assets/assets/image/store/7_2.jpg": "3fbc3257e6fbc5c9f70e35e730819f17",
"assets/assets/image/store/7_3.jpg": "2c79ef2aa7c25c04dd585d6fa08c198c",
"assets/assets/image/store/7_4.jpg": "e474b36d5f5b9db61827341699a01e61",
"assets/assets/image/store/7_5.jpg": "c7aefe22a5cd93179cec5a3eadeaf881",
"assets/assets/image/store/7_6.jpg": "5b7007fb369ffa587860c84207c93f2e",
"assets/assets/image/store/7_7.jpg": "826c4a1611c1ee396fbd8ee0645749dd",
"assets/assets/image/ui/back_arrow.png": "d30ef2eaf4a536a3ddd969dc8b32eca8",
"assets/assets/image/ui/bp.png": "22e5cd9fa7f7b7b3bf72f5508805c6a7",
"assets/assets/image/ui/choice_a.png": "b4d6fc15ef62fd7f4ee0ee12bac8afd8",
"assets/assets/image/ui/choice_b.png": "c79682f709d0f0beca741623751a706c",
"assets/assets/image/ui/fall.jpg": "13dc6b5ba82912cedca72ced325de00e",
"assets/assets/image/ui/flower_shadow.png": "588681ac617c3df2cb714d2d95c4d3c8",
"assets/assets/image/ui/guide_ui.png": "9a3df8dd55a00f1114d6a1abf8693c11",
"assets/assets/image/ui/logo.png": "7ea8c95bbfe26c1b13d7366545f3a054",
"assets/assets/image/ui/menu_icon_1.png": "8fef54a0f7c1500326c652ac901d6c3a",
"assets/assets/image/ui/menu_icon_2.png": "6b7e7b822a5ba9ec282fa24603a91a74",
"assets/assets/image/ui/menu_icon_3.png": "281be9ae3b01607ccd833fea5aa5322d",
"assets/assets/image/ui/purchase.png": "03f027e9979fb9b206fba4238e606ba4",
"assets/assets/image/ui/replay.png": "9135e44bfc415479de1bd3bca063b67a",
"assets/assets/image/ui/spring.jpg": "b52fec6f1030311b8c1a7df107263655",
"assets/assets/image/ui/start.png": "4ad0a10dc8a5034af2c8cc0ef564ecdb",
"assets/assets/image/ui/summer.jpg": "e25be1db0ca54d1b9253d52712cfa824",
"assets/assets/image/ui/visit.png": "0725cffbdd14675df5f1c86f411b0091",
"assets/assets/image/ui/winter.jpg": "a64f3928feed82093a84f126c204f22f",
"assets/assets/sound/bgm.m4a": "d15421bb3033840f6e87428a1c2d58a7",
"assets/FontManifest.json": "f847137645bd83d4e4c20b87cc828fa2",
"assets/fonts/MaruBuri-Regular.otf": "d0781a95f181ffe73582d38c0992b527",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "164f9d3111ea42103ff36381fcad9960",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "f1bb9ab8635f18aa98f2becee857f98b",
"icons/Icon-192.png": "9b11289e7f5e7559cabf7de79b5539fd",
"icons/Icon-512.png": "3c7f0468e51ee106ace8086ee788a546",
"icons/Icon-maskable-192.png": "f0e2a401c7bbd9d87b36c96dfe456373",
"icons/Icon-maskable-512.png": "ece093745b4e24b3ddb5637a855dedc1",
"index.html": "61fc9eac8c71f60e97e4ae76d6b5da6d",
"/": "61fc9eac8c71f60e97e4ae76d6b5da6d",
"main.dart.js": "bbcfaf94cdcfb100bc0a63945fb76c37",
"manifest.json": "a8da3c25793bbd0a135765c195af9d0c",
"manifest.webmanifest": "a8da3c25793bbd0a135765c195af9d0c",
"script.js": "787fe028581ae266c1853085aef2d115",
"sw.js": "58db392f967447a46640d85376733fc2",
"version.json": "714422e5e33c3428d2371bd4da2b234f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  ".",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
