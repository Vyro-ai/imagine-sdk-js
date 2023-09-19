!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("fs"),require("http-errors"),require("fs/promises"),require("path"),require("isomorphic-unfetch")):"function"==typeof define&&define.amd?define(["exports","fs","http-errors","fs/promises","path","isomorphic-unfetch"],e):e((t||self).imaginesdk={},t.fs,t.httpErrors,t.fs$1,t.path,t.isomorphicUnfetch)}(this,function(t,e,r,n,i,o){function u(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var a,s,E,I,f,c=/*#__PURE__*/u(e),_=/*#__PURE__*/u(r),l=/*#__PURE__*/u(n),A=/*#__PURE__*/u(i),R=/*#__PURE__*/u(o);t.Status=void 0,(a=t.Status||(t.Status={}))[a.OK=200]="OK",a[a.BAD_REQUEST=400]="BAD_REQUEST",a[a.UNAUTHORIZED=401]="UNAUTHORIZED",a[a.UNPROCESSABLE_ENTITY=422]="UNPROCESSABLE_ENTITY",a[a.TOO_MANY_REQUESTS=429]="TOO_MANY_REQUESTS",a[a.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR",a[a.SERVICE_UNAVAILABLE=503]="SERVICE_UNAVAILABLE",a[a.PAYMENT_REQUIRED=402]="PAYMENT_REQUIRED",a[a.NOT_ENOUGH_TOKENS=424]="NOT_ENOUGH_TOKENS",t.GenerationStyle=void 0,(s=t.GenerationStyle||(t.GenerationStyle={}))[s.ANIME=21]="ANIME",s[s.PORTRAIT=26]="PORTRAIT",s[s.IMAGINE_V1=27]="IMAGINE_V1",s[s.IMAGINE_V3=28]="IMAGINE_V3",s[s.REALISTIC=29]="REALISTIC",s[s.IMAGINE_V4=30]="IMAGINE_V4",s[s.IMAGINE_V4_CREATIVE=31]="IMAGINE_V4_CREATIVE",s[s.IMAGINE_V4_1=32]="IMAGINE_V4_1",s[s.IMAGINE_V5=33]="IMAGINE_V5",s[s.DELIBERATE=100]="DELIBERATE",s[s.MAGIC_MIX=101]="MAGIC_MIX",s[s.DISNEY=102]="DISNEY",s[s.ABYSS_ORANGE_MIX=103]="ABYSS_ORANGE_MIX",s[s.LYRIEL=104]="LYRIEL",s[s.RPG_4=105]="RPG_4",s[s.REALISTIC_VISION=110]="REALISTIC_VISION",s[s.DREAM_SHAPER=111]="DREAM_SHAPER",s[s.REV_ANIMATED=112]="REV_ANIMATED",s[s.TOON_YOU=113]="TOON_YOU",s[s.UNREAL_ENGINE_5=114]="UNREAL_ENGINE_5",s[s.EPIC_REALISM=115]="EPIC_REALISM",s[s.MEINA_MIX=116]="MEINA_MIX",s[s.XX_MIX_9_REALISTIC=117]="XX_MIX_9_REALISTIC",s[s.THREE_D_RENDERING=118]="THREE_D_RENDERING",s[s.ABSOLUTE_REALITY_V1_6=119]="ABSOLUTE_REALITY_V1_6",t.VariationStyle=void 0,(E=t.VariationStyle||(t.VariationStyle={}))[E.ANIME=21]="ANIME",E[E.PORTRAIT=26]="PORTRAIT",E[E.IMAGINE_V1=27]="IMAGINE_V1",E[E.IMAGINE_V3=28]="IMAGINE_V3",E[E.REALISTIC=29]="REALISTIC",E[E.IMAGINE_V4=30]="IMAGINE_V4",E[E.IMAGINE_V4_CREATIVE=31]="IMAGINE_V4_CREATIVE",E[E.IMAGINE_V4_1=32]="IMAGINE_V4_1",E[E.IMAGINE_V5=33]="IMAGINE_V5",E[E.DELIBERATE=100]="DELIBERATE",E[E.MAGIC_MIX=101]="MAGIC_MIX",E[E.DISNEY=102]="DISNEY",E[E.ABYSS_ORANGE_MIX=103]="ABYSS_ORANGE_MIX",E[E.LYRIEL=104]="LYRIEL",E[E.RPG_4=105]="RPG_4",E[E.REALISTIC_VISION=110]="REALISTIC_VISION",E[E.DREAM_SHAPER=111]="DREAM_SHAPER",E[E.REV_ANIMATED=112]="REV_ANIMATED",E[E.TOON_YOU=113]="TOON_YOU",E[E.UNREAL_ENGINE_5=114]="UNREAL_ENGINE_5",E[E.EPIC_REALISM=115]="EPIC_REALISM",E[E.MEINA_MIX=116]="MEINA_MIX",E[E.XX_MIX_9_REALISTIC=117]="XX_MIX_9_REALISTIC",E[E.THREE_D_RENDERING=118]="THREE_D_RENDERING",E[E.ABSOLUTE_REALITY_V1_6=119]="ABSOLUTE_REALITY_V1_6",t.RemixStyle=void 0,(I=t.RemixStyle||(t.RemixStyle={}))[I.ANIME=21]="ANIME",I[I.IMAGINE_V1=22]="IMAGINE_V1",I[I.REALISTIC=29]="REALISTIC",t.InpaintStyle=void 0,(f=t.InpaintStyle||(t.InpaintStyle={}))[f.REALISM=1]="REALISM";var h=function(t){var e=function(){return Buffer.from(t).toString("base64")};return{base64:e,asImageSrc:function(){return"data:image/png;base64,"+e()},buffer:function(){return t},blob:function(){return new Blob([t],{type:"image/png"})},asFile:function(e){return c.default.writeFileSync(e,Buffer.from(t)),new File([t],e,{type:"image/png"})}}},N=function(t){return _.default(422,t)},v=function(t){return _.default(404,t)},m=function(t,e){return _.default(t,e)},S=function(t,e){return{status:function(){return e},data:function(){return null},getOrThrow:function(){throw m(e,"Response data is not available in the response object. Status Response: "+e)},getOrElse:function(t){return t},errorOrThrow:function(){return t}}},p=function(e){return{status:function(){return t.Status.OK},data:function(){return e},getOrThrow:function(){return e},getOrElse:function(t){return e},errorOrThrow:function(){throw m(t.Status.OK,"Response data is not available in the response object. Status Response: "+t.Status.OK)}}},d=/*#__PURE__*/function(){function t(){this.data=void 0,this.data=new FormData}var e=t.prototype;return e.integer=function(t,e,r){var n;if(null==(e=null!=(n=e)?n:r))return this;if(!Number.isInteger(e))throw N(t+" must be an integer");return this.data.append(t,e.toString()),this},e.float=function(t,e,r){var n;if(null==(e=null!=(n=e)?n:r))return this;if(Number.isNaN(e))throw N(t+" must be a number");return this.data.append(t,e.toString()),this},e.string=function(t,e,r){var n;return null==(e=null!=(n=e)?n:r)||this.data.append(t,e),this},e.blob=function(t,e,r){var n;return null==(e=null!=(n=e)?n:r)||this.data.append(t,e),this},e.boolean=function(t,e,r){var n;return null==(e=null!=(n=e)?n:r)||this.data.append(t,e.toString()),this},e.build=function(){return this.data},t}(),g=function(e){return function(r,n){return Promise.resolve(function(e,r,n){void 0===n&&(n={});try{var i=(new d).string("prompt",r).string("aspect_ratio",n.aspectRatio).integer("style_id",n.style,t.GenerationStyle.IMAGINE_V1).string("negative_prompt",n.negativePrompt).float("cfg",n.cfg).integer("seed",n.seed).integer("steps",n.steps).integer("high_res_results",n.highResolution?1:null).build();return Promise.resolve(e.fetch("v1/imagine/api/generations",i)).then(function(e){var r;function n(t){return r?t:Promise.resolve(e.data.arrayBuffer()).then(function(t){var e=h(t);return p(e)})}var i=function(){if(e.status!==t.Status.OK)return Promise.resolve(e.data.json()).then(function(t){var n=S(t,e.status);return r=1,n})}();return i&&i.then?i.then(n):n(i)})}catch(t){return Promise.reject(t)}}(e,r,n))}};function T(t,e){try{var r=t()}catch(t){return e(t)}return r&&r.then?r.then(void 0,e):r}var M,O,P=function(t){try{return Promise.resolve(T(function(){var e,r=function(){if("string"==typeof t){var r=t.startsWith("http")||t.startsWith("https")?Promise.resolve(function(t){try{return Promise.resolve(T(function(){return Promise.resolve(R.default(t)).then(function(e){if(!e.ok)throw m(e.status,"Failed to fetch image "+t+": "+e.statusText);return Promise.resolve(e.blob())})},function(e){throw v("Error fetching image "+t+": "+e.message)}))}catch(t){return Promise.reject(t)}}(t)).then(function(t){e=t}):Promise.resolve(function(t){try{return Promise.resolve(T(function(){return A.default.isAbsolute(t)||(t=A.default.relative(process.cwd(),t)),Promise.resolve(l.default.readFile(t)).then(function(t){var e=new Uint8Array(t).buffer;return new Blob([e],{type:"image/jpeg"})})},function(e){throw v("Error reading local file "+t+": "+e.message)}))}catch(t){return Promise.reject(t)}}(t)).then(function(t){e=t});if(r&&r.then)return r.then(function(){})}else e=t}();return r&&r.then?r.then(function(){return e}):e},function(t){throw m(t.status,t.message)}))}catch(t){return Promise.reject(t)}},G=function(e){return function(r,n,i,o){return Promise.resolve(function(e,r,n,i,o){void 0===o&&(o={});try{var u=(new d).string("prompt",r),a=u.blob;return Promise.resolve(P(n)).then(function(r){var n=a.call(u,"image",r),s=n.blob;return Promise.resolve(P(i)).then(function(r){var i=s.call(n,"mask",r).integer("style_id",t.InpaintStyle.REALISM).float("cfg",o.cfg).string("neg_prompt",o.negativePrompt).float("inpaint_strength",o.inPaintStrength).build();return Promise.resolve(e.fetch("v1/imagine/api/edits/inpaint",i)).then(function(e){var r;function n(t){return r?t:Promise.resolve(e.data.arrayBuffer()).then(function(t){var e=h(t);return p(e)})}var i=function(){if(e.status!==t.Status.OK)return Promise.resolve(e.data.json()).then(function(t){var n=S(t,e.status);return r=1,n})}();return i&&i.then?i.then(n):n(i)})})})}catch(t){return Promise.reject(t)}}(e,r,n,i,o))}},V=function(e){return function(r,n,i){return Promise.resolve(function(e,r,n,i){void 0===i&&(i={});try{var o=(new d).string("prompt",r),u=o.blob;return Promise.resolve(P(n)).then(function(r){var n=u.call(o,"image",r).integer("style_id",i.style,t.RemixStyle.IMAGINE_V1).integer("seed",i.seed).integer("steps",i.steps).integer("strength",i.strength).string("control",i.control).float("cfg",i.cfg).string("negative_prompt",i.negativePrompt).build();return Promise.resolve(e.fetch("v1/imagine/api/edits/remix",n)).then(function(e){var r;function n(t){return r?t:Promise.resolve(e.data.arrayBuffer()).then(function(t){var e=h(t);return p(e)})}var i=function(){if(e.status!==t.Status.OK)return Promise.resolve(e.data.json()).then(function(t){var n=S(t,e.status);return r=1,n})}();return i&&i.then?i.then(n):n(i)})})}catch(t){return Promise.reject(t)}}(e,r,n,i))}},L=function(e){return function(r){return Promise.resolve(function(e,r){try{var n=(new d).integer("model_version",1),i=n.blob;return Promise.resolve(P(r)).then(function(r){var o=i.call(n,"image",r).build();return Promise.resolve(e.fetch("v1/imagine/api/upscale",o)).then(function(e){var r;function n(t){return r?t:Promise.resolve(e.data.arrayBuffer()).then(function(t){var e=h(t);return p(e)})}var i=function(){if(e.status!==t.Status.OK)return Promise.resolve(e.data.json()).then(function(t){var n=S(t,e.status);return r=1,n})}();return i&&i.then?i.then(n):n(i)})})}catch(t){return Promise.reject(t)}}(e,r))}},y=function(e){return function(r,n,i){return Promise.resolve(function(e,r,n,i){void 0===i&&(i={});try{var o=(new d).string("prompt",r),u=o.blob;return Promise.resolve(P(n)).then(function(r){var n,a=u.call(o,"image",r).integer("style_id",null!=(n=i.style)?n:t.VariationStyle.IMAGINE_V1).integer("seed",i.seed).integer("steps",i.steps).integer("strength",i.strength).float("cfg",i.cfg).string("negative_prompt",i.negativePrompt).build();return Promise.resolve(e.fetch("v1/imagine/api/generations/variations",a)).then(function(e){var r;function n(t){return r?t:Promise.resolve(e.data.arrayBuffer()).then(function(t){var e=h(t);return p(e)})}var i=function(){if(e.status!==t.Status.OK)return Promise.resolve(e.data.json()).then(function(t){var n=S(t,e.status);return r=1,n})}();return i&&i.then?i.then(n):n(i)})})}catch(t){return Promise.reject(t)}}(e,r,n,i))}};t.GenerationAspectRatio=void 0,(M=t.GenerationAspectRatio||(t.GenerationAspectRatio={})).ONE_BY_ONE="1:1",M.FOUR_BY_THREE="4:3",M.THREE_BY_FOUR="3:4",M.THREE_BY_TWO="3:2",M.TWO_BY_THREE="2:3",M.SIXTEEN_BY_NINE="16:9",M.NINE_BY_SIXTEEN="9:16",M.FIVE_BY_FOUR="5:4",M.FOUR_BY_FIVE="4:5",M.EIGHT_BY_TEN="8:10",M.THREE_BY_ONE="3:1",t.RemixControl=void 0,(O=t.RemixControl||(t.RemixControl={})).OPENPOSE="openpose",O.SCRIBBLE="scribble",O.CANNY="canny",O.LINEART="lineart",O.DEPTH="depth";var b=function(t,e){var r,n=null!=(r=null==e?void 0:e.client)?r:function(t,e){return{fetch:function(t,r){try{return Promise.resolve(R.default("https://api.vyro.ai/"+t,{method:"POST",body:r,headers:{Authorization:"Bearer "+e}})).then(function(t){return{status:t.status,data:t}})}catch(t){return Promise.reject(t)}}}}(0,t);return{generations:g(n),variations:y(n),remix:V(n),upscale:L(n),inpaint:G(n)}};t.client=b,t.default=b});