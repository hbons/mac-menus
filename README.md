## Mac Menus Prototype

[![Preview](https://github.com/hbons/mac-menus/blob/gh-pages/img/preview.png?raw=true)](https://hbons.github.io/mac-menus-prototype/prototypes/demo/demo.html)

Mac OS X's menu bar in HTML5 for prototyping.
Use this to design and test your app's menu system.

Here's a [demo](https://hbons.github.io/mac-menus/prototypes/demo/demo.html).

### Example

```html
<div class="bar"> <!-- The menu bar -->
    <div id="example" class="item">
        <header>Edit</header> <!-- Toplevel menu -->
        <div class="menu">
            <div class="item disabled">Undo</div> <!-- Disabled items -->
            <div class="item">Redo</div>
            <hr>
            <div class="item">Cut</div>
            <div class="item">Copy</div>
            <div class="item">Paste</div>
            <hr>
            <div class="item">
                <header>Insert</header> <!-- Submenu -->
                <div class="menu">
                    <div class="item">Image</div>
                    <div class="item">Ruler</div>    
                </div>
            </div>
            <hr>
            <div class="item checkmark">Bold</div> <!-- Checked items -->
            <div class="item">Italic</div>    
        </div>
    </div>
</div>
```

You can choose a menu to open by default by specifying its `#ID` in the page `URL`.
