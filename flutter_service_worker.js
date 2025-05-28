'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cc88689e5682871b7f0c2e1a35dacc74",
"version.json": "be1e763d4ab16c920611b0582ffa1709",
"index.html": "f34837ae81afefda3c351b3d67599e89",
"/": "f34837ae81afefda3c351b3d67599e89",
"main.dart.js": "b5e5f14f761a248269ec010074b79ddc",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "019fa242fbde8d72ce6fee394d88dc1c",
"assets/AssetManifest.json": "6e0606c325390bb15635de4474992bc2",
"assets/NOTICES": "9c4082968dcbaba6fcc8307698b25d5a",
"assets/FontManifest.json": "59daf44a86af4b352408fed78ff04055",
"assets/AssetManifest.bin.json": "985f04624bfad13ed6916f717f317eb3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9d6035445fc938592ca7130f6f2687db",
"assets/fonts/MaterialIcons-Regular.otf": "06e0e889db68344ec9bb0206b38546a1",
"assets/assets/images/imp/ueat/8.png": "14b589ce0c4688a419f6af05f7773f71",
"assets/assets/images/imp/ueat/9.png": "7dba75102e1db6223384d9e58fdb0daf",
"assets/assets/images/imp/ueat/11.png": "edff4fca421e0b9f9d2f029ec75b5424",
"assets/assets/images/imp/ueat/10.png": "e22c4301acee02e3f820d5784a2517e2",
"assets/assets/images/imp/ueat/4.png": "75b9feeb77114903a6e5ddb45e0d48e5",
"assets/assets/images/imp/ueat/5.png": "e2da12936ad47bc7f6623e442a055020",
"assets/assets/images/imp/ueat/7.png": "25230ab82d9bb8fc7227a18ce5e11d59",
"assets/assets/images/imp/ueat/6.png": "48bb411af58533ac54889dc5e147d377",
"assets/assets/images/imp/ueat/2.png": "c1b12ddcd8a3c070dff992089a67a52a",
"assets/assets/images/imp/ueat/3.png": "45d724de337cd815af2ef9014afc3244",
"assets/assets/images/imp/ueat/1.png": "3727dbb8228087e1145c445b446bf89a",
"assets/assets/images/imp/autumn/8.png": "d833179c95357af46ae8c229a756011b",
"assets/assets/images/imp/autumn/9.png": "2ec891ba4711c6f4cd3c305ec7d361f1",
"assets/assets/images/imp/autumn/10.png": "c94fa64ac9b8fb58615fc7223a5bacc4",
"assets/assets/images/imp/autumn/4.png": "bdcc906244b374f48da3ffb63399b7c6",
"assets/assets/images/imp/autumn/5.png": "60c7267f55e6fe8ee527ce110a7e7614",
"assets/assets/images/imp/autumn/7.png": "979b6bf9904051cde3b279a5ad2265fe",
"assets/assets/images/imp/autumn/6.png": "a9fb2216a2e2955e4b752ea1f6aa45c4",
"assets/assets/images/imp/autumn/2.png": "99cf1bffa38c8195e2bddd21703d6845",
"assets/assets/images/imp/autumn/3.png": "12564aefdf56ae79a35e9697e860860b",
"assets/assets/images/imp/autumn/1.png": "fddc3e7060e383bb0bdc9915c91b01f2",
"assets/assets/images/imp/umart/8.png": "22efc22cf656b47107c8e37c3685450f",
"assets/assets/images/imp/umart/9.png": "da70f23bf97b1f66d2918ab6c3233c87",
"assets/assets/images/imp/umart/10.png": "3957a50eab8a03662a3906f455e5b050",
"assets/assets/images/imp/umart/4.png": "12490cd5dd1a76720e5abedcd03b62ae",
"assets/assets/images/imp/umart/5.png": "b7d1e10620ec9464dcb4e3704df66bfa",
"assets/assets/images/imp/umart/7.png": "e6e058c3b0d47d1140e5582b8d31c721",
"assets/assets/images/imp/umart/6.png": "f959014cc6bd4d15ff82a9ae4e1fd7d4",
"assets/assets/images/imp/umart/2.png": "03caec432c77c188e9b5d13aa29c4b6d",
"assets/assets/images/imp/umart/3.png": "75f54b74a7398549cea177818a1b3cff",
"assets/assets/images/imp/umart/1.png": "8d509b5a471af03ded4d0481dd2c29e9",
"assets/assets/images/imp/ice2hot/8.png": "400c1a22c53d096311a62a1ef3fc3b36",
"assets/assets/images/imp/ice2hot/9.png": "2985009782ec81eb7c0132629748c899",
"assets/assets/images/imp/ice2hot/10.png": "32305f550190cd97e2e1740a3050e421",
"assets/assets/images/imp/ice2hot/4.png": "a23c28b678566a016c7ceaa2e8bed285",
"assets/assets/images/imp/ice2hot/5.png": "97aceeb0071b3475302c99a89c8d0559",
"assets/assets/images/imp/ice2hot/7.png": "62cafff79753f360a749525fc638c47c",
"assets/assets/images/imp/ice2hot/6.png": "6c336b4be561d867c43e8de44919e2d9",
"assets/assets/images/imp/ice2hot/2.png": "191d572994973b371cb5bea86912c429",
"assets/assets/images/imp/ice2hot/3.png": "4fce2e2802b2d26e98dc8bba1dc4ee84",
"assets/assets/images/imp/ice2hot/1.png": "64bbcc991154ea05cf8445b52d754269",
"assets/assets/images/imp/utrade/8.png": "06a4d44e5bc582cac6980e7d417b65ba",
"assets/assets/images/imp/utrade/9.png": "0f999c20fdf0bfabd4dd1196b9065b91",
"assets/assets/images/imp/utrade/10.png": "ec34dae5c9be58028fe349bedd22b244",
"assets/assets/images/imp/utrade/4.png": "90dd4b8f820057db8cb9168e846d1cd9",
"assets/assets/images/imp/utrade/5.png": "dc9b776a593287986d62cd85225024f6",
"assets/assets/images/imp/utrade/7.png": "5338b7e385a255f1a7e373d8b8e3df4e",
"assets/assets/images/imp/utrade/6.png": "435586248404422ff48b1bb779791343",
"assets/assets/images/imp/utrade/2.png": "56e4802099065a6ece397e18745bd549",
"assets/assets/images/imp/utrade/3.png": "edaf8346f648de5b631d63c43cb049bc",
"assets/assets/images/imp/utrade/1.png": "359a83cea004054111719c05bc14eab8",
"assets/assets/images/imp/coupay/8.png": "fd4be60f593c86bdb3ab6646106ccd99",
"assets/assets/images/imp/coupay/4.png": "250545de7e7e154945fc42b25f53cde8",
"assets/assets/images/imp/coupay/5.png": "81811f7ceaff716950180c65c62a9a15",
"assets/assets/images/imp/coupay/7.png": "508756bae16c9cf0940544b4c236a26d",
"assets/assets/images/imp/coupay/6.png": "2e87c2b283a942f91737bc8560ba1789",
"assets/assets/images/imp/coupay/2.png": "fa7e52f637c4ad135b1f28e2f56950a5",
"assets/assets/images/imp/coupay/3.png": "5c44e2ea307514ab52aa0a0d748612d0",
"assets/assets/images/imp/coupay/1.png": "33edd6e0a44c86fc00fbb872b4051f67",
"assets/assets/images/imp/haulier/c8.png": "bf076d3f04c1d9758da29e321d0b03c4",
"assets/assets/images/imp/haulier/c9.png": "996fb018dc31584f67c96b76647b51da",
"assets/assets/images/imp/haulier/d9.png": "f070d34f0fa8e5bd769d24496e9b49cd",
"assets/assets/images/imp/haulier/d8.png": "51d31d875b612f4d59d3062f418a332e",
"assets/assets/images/imp/haulier/d6.png": "085e35b908f41c95802f168526eca746",
"assets/assets/images/imp/haulier/d7.png": "de09815feecf02d39c7c424d68aa622f",
"assets/assets/images/imp/haulier/d5.png": "cf62532f7e4cdc894733a114f628a370",
"assets/assets/images/imp/haulier/d4.png": "74a312e8d15a87b29b925627188c19dc",
"assets/assets/images/imp/haulier/d1.png": "7dbe188870103aa8acfd84a6c1def386",
"assets/assets/images/imp/haulier/d10.png": "5b610fdb4645f15b741b0951df43378a",
"assets/assets/images/imp/haulier/d3.png": "808e7a3fa93338b25e8def0e2845805f",
"assets/assets/images/imp/haulier/d2.png": "1736bbb7e3b8368cc480b67023945f28",
"assets/assets/images/imp/haulier/c1.png": "f29819d7ef438cdb951329bc8fd5b8f4",
"assets/assets/images/imp/haulier/c2.png": "f679fe386a222b165f156d0b1a849577",
"assets/assets/images/imp/haulier/c3.png": "a0b5bdf9ff860ff56211487125f5d678",
"assets/assets/images/imp/haulier/c10.png": "08c638b4cc2adb5980df057d435b11c1",
"assets/assets/images/imp/haulier/c7.png": "a487a9a6430172af6881f4ce294b8eee",
"assets/assets/images/imp/haulier/c6.png": "bb2d40a6aff3880b86e156b915a4af8b",
"assets/assets/images/imp/haulier/c4.png": "8b6e8572f32dec6dfab72543def759e5",
"assets/assets/images/imp/haulier/c5.png": "9f72b921540afe033184a393e635eb95",
"assets/assets/images/imp/umart_dri/8.png": "72d69f81811f1e7de12190a693a5601a",
"assets/assets/images/imp/umart_dri/4.png": "2c39d5f5db592bcaa40bfd1f22c24cb3",
"assets/assets/images/imp/umart_dri/5.png": "0dd8e487e52ed8d9d9e5881949b6ac0a",
"assets/assets/images/imp/umart_dri/7.png": "c52a2f0c17d228d946896c585b58398e",
"assets/assets/images/imp/umart_dri/6.png": "a6bd8deb096cef9dbd29a2a142ec22e1",
"assets/assets/images/imp/umart_dri/2.png": "f87c98f6a511867e1e8212f0d193beec",
"assets/assets/images/imp/umart_dri/3.png": "577f4bd54dd223420036b494219a10e8",
"assets/assets/images/imp/umart_dri/1.png": "4ef9676f698f118f57279a923910d804",
"assets/assets/images/imp/critique/8.png": "6e65aec97e631fee5527ebec644fb20f",
"assets/assets/images/imp/critique/4.png": "a45b533d63978d70e4b53c07b383ed95",
"assets/assets/images/imp/critique/5.png": "cfd79ea8cee3f33aa13307bc2044baa2",
"assets/assets/images/imp/critique/7.png": "985ad92ea6c81dcbd5fb776de984a431",
"assets/assets/images/imp/critique/6.png": "961d3fca0ed1aff07d9e8c2ca8571b15",
"assets/assets/images/imp/critique/2.png": "19ba0f653bc240e1f939af17a93eb9f7",
"assets/assets/images/imp/critique/3.png": "379aa55784eb878fa91f69ce5f0c0888",
"assets/assets/images/imp/critique/1.png": "1aff73f45c77d0b48e4d8de93a1b0834",
"assets/assets/images/imp/shareclub/outlate5.png": "4fd02a0e35baddb5a7d96f0235ccff4b",
"assets/assets/images/imp/shareclub/user3.png": "673531cef5fe044303c81161df3d69e0",
"assets/assets/images/imp/shareclub/user2.png": "1d7ab2009ca06a4a4e950d8fe7c7f6ed",
"assets/assets/images/imp/shareclub/outlate4.png": "0f2f5e7e4810b580c6afe72bfcaf4072",
"assets/assets/images/imp/shareclub/outlate6.png": "07a6ec0cfcdb4a648b5ac468f0e06b76",
"assets/assets/images/imp/shareclub/user1.png": "5d799dbef9c946653aed3a8b09137743",
"assets/assets/images/imp/shareclub/outlate3.png": "5b3e1801e1e24cf75196adcf1e1d1836",
"assets/assets/images/imp/shareclub/user5.png": "226147d939016ab90b912604dda22650",
"assets/assets/images/imp/shareclub/user4.png": "970b1fe603414bf324a4480b0b4f1adb",
"assets/assets/images/imp/shareclub/outlate2.png": "dd319dbd045c2d01d1e69eb034689955",
"assets/assets/images/imp/shareclub/user6.png": "34a3e4ce17652c8a25864aeb525781f5",
"assets/assets/images/imp/shareclub/outlate1.png": "2d65070270ac9888a5b27932bcd74173",
"assets/assets/images/imp/hexia/patient1.png": "e4df792630cf936919ea6ed5ff872b95",
"assets/assets/images/imp/hexia/patient3.png": "3511fee66735a491e53dedb569e51e05",
"assets/assets/images/imp/hexia/patient2.png": "f42e35fbaa521bc8dc9568e164e35577",
"assets/assets/images/imp/hexia/patient6.png": "879625e5b8111fbdab67b0aa8dd54c36",
"assets/assets/images/imp/hexia/patient7.png": "82356019371a49fd1a6f7a76079f6ed4",
"assets/assets/images/imp/hexia/patient5.png": "a165bafc044716485fa577af0360ce28",
"assets/assets/images/imp/hexia/patient4.png": "f9d865d8bb19e9487bbf0c4ed79dddae",
"assets/assets/images/imp/hexia/doctor1.png": "322c4c649a9e574a52969cd70f88eab6",
"assets/assets/images/imp/hexia/doctor2.png": "437b5c79c558bb7717d033d2be34a501",
"assets/assets/images/imp/hexia/doctor3.png": "479125b80c832664373924cde833c001",
"assets/assets/images/imp/hexia/doctor7.png": "5073f674a98cf87a986c042f4b1c9ecc",
"assets/assets/images/imp/hexia/doctor6.png": "84413f7f8794280801cded9ce3390f28",
"assets/assets/images/imp/hexia/doctor4.png": "82d307f76c37d12a5a8df25a946bff1e",
"assets/assets/images/imp/hexia/doctor5.png": "aec55a8bf66800374eeb34663b20d4b3",
"assets/assets/images/imp/hexia/patient9.png": "280c35510e9799ec1dcb9abdd751098f",
"assets/assets/images/imp/hexia/patient8.png": "19cf04e3e6f6341e92563cc04747862b",
"assets/assets/images/imp/hexia/patient11.jpeg": "9cba9353d3862931ab3fa678adde5254",
"assets/assets/images/imp/hexia/patient110.jpeg": "d2da175529b5a9aaf043d88c7cca7c6c",
"assets/assets/font/SFProText-Medium.ttf": "a260cbc18870da144038776461d9df28",
"assets/assets/font/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/font/Proximanova-Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/assets/font/Fasthand-Regular.ttf": "3a1d9b02dd654301b68fcd74153e8d70",
"assets/assets/font/Montserrat-Light.ttf": "e65ae7ed560da1a63db603bd8584cfdb",
"assets/assets/font/SFProText-Semibold.ttf": "d6243b42d786410a86f0bafee83d503a",
"assets/assets/font/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/font/SFProText-regular.ttf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/font/Montserrat-SemiBold.ttf": "fb428a00b04d4e93deb4d7180814848b",
"assets/assets/font/Montserrat-ExtraBold.ttf": "bd8fb30c6473177cfb9a5544c9ad8fdb",
"assets/assets/font/Montserrat-Black.ttf": "9c1278c56276b018109f295c1a751a69",
"assets/assets/font/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
