# LAP 3 Day 1 - Afternoon class

Using hook and state

- tidy up index.js (remove some useless extra folders)
- add fragment 

- `npm start` 
- build to divs within fragment
- install bootstrap 
 `npm install react-bootstrap bootstrap`
- add to App.js 
 `import 'bootstrap/dist/css/bootstrap.min.css';`
- create and add App.css
- connect App.css to App.js `import './App.css';`

Add event (Mouse Events)
- ` <div onMouseEnter={()=> console.log('do something')}>first div</div>` - when we hover over div one we can see 'do something' in console
- trasnfer it into function 

Change background:
- ` <div className="container vh-100" style={{backgroundColor: "saddlebrown"}}>`

Add state:
- add state 
- change initial backgground color
- when hove over div 1 change background to red and back to initial one
- hover over each div changes bcC 

![pic1](./assets/pic1.png)
![pic2](./assets/pic2.png)


Convention
- on Element Event (onInpiutclick)
