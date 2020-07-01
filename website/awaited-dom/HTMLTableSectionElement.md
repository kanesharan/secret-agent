# [AwaitedDOM](/docs/basic-interfaces/awaited-dom) <span>/</span> HTMLTableSectionElement

<div class='overview'>The <strong><code>HTMLTableSectionElement</code></strong> interface provides special properties and methods (beyond the <a href="/en-US/docs/Web/API/HTMLElement" title="The HTMLElement interface represents any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it."><code>HTMLElement</code></a> interface it also has available to it by inheritance) for manipulating the layout and presentation of sections, that is headers, footers and bodies, in an HTML table.</div>

## Properties

### .align <div class="specs"><i>W3C</i></div> {#align}

Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> containing an enumerated value reflecting the <code><a href="/en-US/docs/Web/HTML/Element/tr#attr-align">align</a></code> attribute. It indicates the alignment of the element's contents with respect to the surrounding context. The possible values are <code>"left"</code>, <code>"right"</code>, and <code>"center"
</code>.

#### **Type**: `null`

### .ch <div class="specs"><i>W3C</i></div> {#ch}

Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> containing one single chararcter. This character is the one to align all the cell of a column on. It reflects the <code><a href="/en-US/docs/Web/HTML/Element/tr#attr-char">char</a></code> and default to the decimal points associated with the language, e.g. <code>'.'</code> for English, or <code>','
</code> for French. This property was optional and was not very well supported.

#### **Type**: `null`

### .chOff <div class="specs"><i>W3C</i></div> {#chOff}

Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> containing a integer indicating how many characters must be left at the right (for left-to-right scripts; or at the left for right-to-left scripts) of the character defined by <code>HTMLTableRowElement.ch
</code>. This property was optional and was not very well supported.

#### **Type**: `null`

### .rows <div class="specs"><i>W3C</i></div> {#rows}

Returns a live <a href="/en-US/docs/Web/API/HTMLCollection" title="The HTMLCollection interface represents a generic collection (array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list."><code>HTMLCollection</code></a> containing the rows in the section. The <code>HTMLCollection
</code> is live and is automatically updated when rows are added or removed.

#### **Type**: `null`

### .vAlign <div class="specs"><i>W3C</i></div> {#vAlign}

Is a <a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a> representing an enumerated value indicating how the content of the cell must be vertically aligned. It reflects the <code><a href="/en-US/docs/Web/HTML/Element/tr#attr-valign">valign</a></code> attribute and can have one of the following values: <code>"top"</code>, <code>"middle"</code>, <code>"bottom"</code>, or <code>"baseline"
</code>.

#### **Type**: `null`

## Methods

### .deleteRow*(...args)* <div class="specs"><i>W3C</i></div> {#deleteRow}

Removes the cell at the given position in the section. If the given position is greater (or equal as it starts at zero) than the amount of rows in the section, or is smaller than <code>0</code>, it raises a <a href="/en-US/docs/Web/API/DOMException" title="The DOMException interface represents an abnormal event (called an exception) which occurs as a result of calling a method or accessing a property of a web API."><code>DOMException</code></a> with the <code>IndexSizeError
</code> value.

#### **Arguments**:


 - none

#### **Returns**: `Promise<void>`

### .insertRow*(...args)* <div class="specs"><i>W3C</i></div> {#insertRow}

Inserts a new row just before the given position in the section. If the given position is not given or is <code>-1</code>, it appends the row to the end of section. If the given position is greater (or equal as it starts at zero) than the amount of rows in the section, or is smaller than <code>-1</code>, it raises a <a href="/en-US/docs/Web/API/DOMException" title="The DOMException interface represents an abnormal event (called an exception) which occurs as a result of calling a method or accessing a property of a web API."><code>DOMException</code></a> with the <code>IndexSizeError
</code> value.

#### **Arguments**:


 - none

#### **Returns**: `Promise<void>`