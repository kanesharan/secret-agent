(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{695:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},994:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(695),s=r(0);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var i={VueRemarkRoot:n.a},d=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===o(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:r[e]=function(){return i[e]}}))},v=s.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",u={excerpt:null,title:"Blob"};var h=function(e){e.options[c]&&(e.options[c]=u),s.a.util.defineReactive(e.options,c,u),e.options.computed=v.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},p=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"blob"}},[r("a",{attrs:{href:"#blob","aria-hidden":"true"}},[e._v("#")]),e._v("Blob")]),r("div",{staticClass:"overview"},[e._v("The "),r("strong",[r("code",[e._v("Blob")])]),e._v(" object represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a "),r("a",{attrs:{href:"/en-US/docs/Web/API/ReadableStream",title:"The ReadableStream interface of the&nbsp;Streams API&nbsp;represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object."}},[r("code",[e._v("ReadableStream")])]),e._v(" so its methods can be used for processing the data.")]),r("div",{staticClass:"overview"},[e._v("Blobs can represent data that isn't necessarily in a JavaScript-native format. The "),r("a",{attrs:{href:"/en-US/docs/Web/API/File",title:"The File interface provides information about files and allows JavaScript in a web page to access their content."}},[r("code",[e._v("File")])]),e._v(" interface is based on "),r("code",[e._v("Blob")]),e._v(", inheriting blob functionality and expanding it to support files on the user's system.")]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),r("h3",{attrs:{id:"size"}},[r("a",{attrs:{href:"#size","aria-hidden":"true"}},[e._v("#")]),e._v(".size "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("The size, in bytes, of the data contained in the "),r("code",[e._v("Blob\n")]),e._v(" object.")]),r("h4",{attrs:{id:"type-null"}},[r("a",{attrs:{href:"#type-null","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])]),r("h3",{attrs:{id:"type"}},[r("a",{attrs:{href:"#type","aria-hidden":"true"}},[e._v("#")]),e._v(".type "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("A string indicating the MIME type of the data contained in the "),r("code",[e._v("Blob\n")]),e._v(". If the type is unknown, this string is empty.")]),r("h4",{attrs:{id:"type-null-1"}},[r("a",{attrs:{href:"#type-null-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("h3",{attrs:{id:"arrayBuffer"}},[r("a",{attrs:{href:"#arrayBuffer","aria-hidden":"true"}},[e._v("#")]),e._v(".arrayBuffer"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a promise that resolves with an "),r("a",{attrs:{href:"/en-US/docs/Web/API/ArrayBuffer",title:"The documentation about this has not yet been written; please consider contributing!"}},[r("code",[e._v("ArrayBuffer")])]),e._v(" containing the entire contents of the "),r("code",[e._v("Blob\n")]),e._v(" as binary data.")]),r("h4",{attrs:{id:"arguments"}},[r("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid"}},[r("a",{attrs:{href:"#returns-promisevoid","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"slice"}},[r("a",{attrs:{href:"#slice","aria-hidden":"true"}},[e._v("#")]),e._v(".slice"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a new "),r("code",[e._v("Blob\n")]),e._v(" object containing the data in the specified range of bytes of the blob on which it's called.")]),r("h4",{attrs:{id:"arguments-1"}},[r("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-1"}},[r("a",{attrs:{href:"#returns-promisevoid-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"stream"}},[r("a",{attrs:{href:"#stream","aria-hidden":"true"}},[e._v("#")]),e._v(".stream"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/API/ReadableStream",title:"The ReadableStream interface of the&nbsp;Streams API&nbsp;represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object."}},[r("code",[e._v("ReadableStream")])]),e._v(" that can be used to read the contents of the "),r("code",[e._v("Blob\n")]),e._v(".")]),r("h4",{attrs:{id:"arguments-2"}},[r("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-2"}},[r("a",{attrs:{href:"#returns-promisevoid-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])]),r("h3",{attrs:{id:"text"}},[r("a",{attrs:{href:"#text","aria-hidden":"true"}},[e._v("#")]),e._v(".text"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a promise that resolves with a "),r("a",{attrs:{href:"/en-US/docs/Web/API/USVString",title:"USVString corresponds to the set of all possible sequences of unicode scalar values. USVString maps to a String when returned in JavaScript; it's generally only used for APIs that perform text processing and need a string of unicode scalar values to operate on. USVString is equivalent to DOMString except for not allowing unpaired surrogate codepoints. Unpaired surrogate codepoints present in USVString are converted by the browser to Unicode 'replacement character' U+FFFD, (�)."}},[r("code",[e._v("USVString")])]),e._v(" containing the entire contents of the "),r("code",[e._v("Blob\n")]),e._v(" interpreted as UTF-8 text.")]),r("h4",{attrs:{id:"arguments-3"}},[r("a",{attrs:{href:"#arguments-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-3"}},[r("a",{attrs:{href:"#returns-promisevoid-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])])])}),[],!1,null,null,null);"function"==typeof d&&d(p),"function"==typeof h&&h(p);t.default=p.exports}}]);