# MediaList

<div class='overview'>The <code><strong>MediaList</strong></code> interface represents the media queries of a stylesheet, e.g. those set using a <a href="/en-US/docs/Web/HTML/Element/link" title="The HTML External Resource Link element (<link>) specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both &quot;favicon&quot; style icons and icons for the home screen and apps on mobile devices) among other things."><code>&lt;link&gt;</code></a> element's <code>media</code> attribute.</div>

## Properties

### .length <div class="specs"><i>W3C</i></div> {#length}

Returns the number of media queries in the <code>MediaList</code>.

#### **Type**: `null`

### .mediaText <div class="specs"><i>W3C</i></div> {#mediaText}

A stringifier that returns a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> representing the <code>MediaList</code> as text, and also allows you to set a new <code>MediaList</code>.

#### **Type**: `null`

## Methods

### .appendMedium*(...args)* <div class="specs"><i>W3C</i></div> {#appendMedium}

Adds a media query to the <code>MediaList</code>.

#### **Arguments**:


 - none

#### **Returns**: `Promise<void>`

### .deleteMedium*(...args)* <div class="specs"><i>W3C</i></div> {#deleteMedium}

Removes a media query from the <code>MediaList</code>.

#### **Arguments**:


 - none

#### **Returns**: `Promise<void>`

### .item*(...args)* <div class="specs"><i>W3C</i></div> {#item}

A getter that returns a <a href="/en-US/docs/Web/API/CSSOMString" title="CSSOMString is used to denote string data in CSSOM specifications and can refer to either DOMString or USVString. When a specification says CSSOMString, it depends on the browser vendors to choose whether to use DOMString or USVString. While browser implementations that use UTF-8 internally to represent strings in memory can use USVString when the specification says CSSOMString, implementations that already represent strings as 16-bit sequences might choose to use DOMString instead."><code>CSSOMString</code></a> representing a media query as text, given the media query's index value inside the <code>MediaList</code>.

#### **Arguments**:


 - none

#### **Returns**: `Promise<void>`

## Events