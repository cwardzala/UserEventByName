User Event By Name
==================
This allows you to access keyboard events by their human name rather than keyCode.


```javascript
window.onkeydown = function (e) {
	UserEventByName(e,"space,up,down"); // will return true if space, up, or down are pressed, false for everything else.
}
```