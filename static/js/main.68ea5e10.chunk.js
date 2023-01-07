(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(7),c=i.n(a),n=(i(14),i(2)),s=i(6),l=(i(15),i(1)),r=(i(16),i(17),i(0)),o=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbId)}))})},m=i(8),j=i.n(m);var b=function(e){var t=e.name,i=e.value,a=e.label,c=void 0===a?t:a,s=e.required,o=void 0!==s&&s,d=e.onChange,m=void 0===d?function(){}:d,b=e.validationUrl,h=void 0===b?function(){return!0}:b,u=Object(l.useState)((function(){return"".concat(t,"-").concat(Math.random().toString().slice(2))})),O=Object(n.a)(u,1)[0],g=Object(l.useState)(!1),p=Object(n.a)(g,2),v=p[0],w=p[1],f=v&&o&&!i;return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:O,children:c}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{id:O,"data-cy":"movie-".concat(t),className:j()("input",{"is-danger":f}),type:"text",placeholder:"Enter ".concat(c),value:i,onChange:function(e){return m(e.target.value)},onBlur:function(){return w(!0)}})}),f&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(c," is required")}),!h(i)&&i&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(c," has incorrect URL")})]})},h=function(e){var t=e.onAdd,i=Object(l.useState)(0),a=Object(n.a)(i,2),c=a[0],s=a[1],o=Object(l.useState)(""),d=Object(n.a)(o,2),m=d[0],j=d[1],h=Object(l.useState)(""),u=Object(n.a)(h,2),O=u[0],g=u[1],p=Object(l.useState)(""),v=Object(n.a)(p,2),w=v[0],f=v[1],x=Object(l.useState)(""),M=Object(n.a)(x,2),N=M[0],U=M[1],y=Object(l.useState)(""),I=Object(n.a)(y,2),T=I[0],B=I[1],_=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/,k=!m||!w||!N||!T,z=function(e){return(e.match(_)||[])[0]===e};return Object(r.jsxs)("form",{className:"NewMovie",children:[Object(r.jsx)("h2",{className:"title",children:"Add a movie"}),Object(r.jsx)(b,{name:"title",label:"Title",value:m,onChange:j,required:!0}),Object(r.jsx)(b,{name:"description",label:"Description",value:O,onChange:g}),Object(r.jsx)(b,{name:"imgUrl",label:"Image URL",value:w,onChange:f,required:!0,validationUrl:z}),Object(r.jsx)(b,{name:"imdbUrl",label:"Imdb URL",value:N,onChange:U,required:!0,validationUrl:z}),Object(r.jsx)(b,{name:"imdbId",label:"Imdb ID",value:T,onChange:B,required:!0}),Object(r.jsx)("div",{className:"field is-grouped",children:Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",onClick:function(e){e.preventDefault(),N.match(_)&&w.match(_)&&(t({title:m,description:O,imgUrl:w,imdbUrl:N,imdbId:T}),j(""),g(""),f(""),U(""),B(""),s(c+1))},disabled:k,children:"Add"})})})]},c)},u=i(9),O=function(){var e=Object(s.a)(u),t=Object(l.useState)(e),i=Object(n.a)(t,2),a=i[0],c=i[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:a})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(h,{onAdd:function(e){c((function(t){return[].concat(Object(s.a)(t),[e])}))}})})]})};c.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.68ea5e10.chunk.js.map