'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "79a77e8ffbe0d0bfc12acb666d559037",
"assets/assets/Logo2.png": "0601d1da1f931f394334a2d66ba41ff7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "3635b248f303d3c77d15507878f3be65",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "705b3f97e6403bc98ea9f82cf962ec5a",
"/": "6b1d826e41b566aaeb40e6eebc1620b0",
"main.dart.js": "82c591e1f74a10a383af75e4da4eddae",
"manifest.json": "25ec0062f88b118e8099d8801cf5b080",
"reservations/.git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
"reservations/.git/config": "603ced5175928d4708265e26d3b8fa94",
"reservations/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"reservations/.git/FETCH_HEAD": "a4a98008d747dd58fd1725342b0633e2",
"reservations/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"reservations/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"reservations/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"reservations/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"reservations/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"reservations/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"reservations/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"reservations/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"reservations/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"reservations/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"reservations/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"reservations/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"reservations/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"reservations/.git/index": "df39db305cafc5fded81cf389e2ccca8",
"reservations/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"reservations/.git/logs/HEAD": "0e10b7798837998a68e6b7c523ad533f",
"reservations/.git/logs/refs/heads/main": "0e10b7798837998a68e6b7c523ad533f",
"reservations/.git/logs/refs/remotes/origin/main": "3bd5be1d2496e83acbfe1d27399ae353",
"reservations/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"reservations/.git/objects/08/5fea30557cb0f584b2e4b124ffd0731c59303f": "64420d74ffd6cde9827d07587c1aca6e",
"reservations/.git/objects/1f/00121ddd0556a635f38e27e9586add1294437e": "d0f17b1769717740729d8010e0c64dff",
"reservations/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"reservations/.git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
"reservations/.git/objects/3a/97d0b1af1dd06e4122816a3100ff4629dda3bc": "638aeb7229f091d1ff87d92e619a814a",
"reservations/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"reservations/.git/objects/57/e3f9db5e1e9e401f9d9f04be584836102dd164": "8ec0924946c165f1406c691f10912fe0",
"reservations/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"reservations/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"reservations/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"reservations/.git/objects/9d/08b01081764f4e347de2a83121e3739d641664": "a8246739f50837331eca255206d4c3c2",
"reservations/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"reservations/.git/objects/a7/98fdc2b17b86e651d9181ea99f5be07d37dee8": "19eae7881bda70117805444922cbf745",
"reservations/.git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
"reservations/.git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"reservations/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"reservations/.git/objects/ba/238696d833d3e143b25d73be96880858f7e8c3": "e8cafdb96f0a186d052b12fa3037a7ab",
"reservations/.git/objects/be/424ee61b27a2e59fa39d8b59cfb8c0b321bc4d": "83261a27290e9f4c9113688299e0bee6",
"reservations/.git/objects/bf/831af39de24da92c09abd3a62a1207cc0d94cd": "61e48c9611ac22e194bc9cb2dca6a903",
"reservations/.git/objects/d0/1bcadd43437c980bc829dac51c0848e35053ab": "07fb28c4744b9c3fa8558ff9aa29c513",
"reservations/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"reservations/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"reservations/.git/refs/heads/main": "63eeb419b621e295e98d6971f64e7097",
"reservations/.git/refs/remotes/origin/main": "63eeb419b621e295e98d6971f64e7097",
"reservations/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"reservations/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"reservations/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"reservations/assets/NOTICES": "3635b248f303d3c77d15507878f3be65",
"reservations/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"reservations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"reservations/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"reservations/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"reservations/index.html": "6b1d826e41b566aaeb40e6eebc1620b0",
"reservations/main.dart.js": "b2524e7e67e525028443b0704415ccc4",
"reservations/manifest.json": "25ec0062f88b118e8099d8801cf5b080",
"reservations/version.json": "399c44dda08184f6be0560cf2fa4f705",
"version.json": "399c44dda08184f6be0560cf2fa4f705"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
