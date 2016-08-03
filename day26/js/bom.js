
// var device_pixel_density
var dp = window.devicePixelRatio;

// 웹 브라우저의 콘솔 패널에 기록을 남긴다.

console.log('기기의 픽셀농도:', dp);

// javaScript 조건문

if (dp > 1) {
	console.log("고해상도 디스플레이의 픽셀 농도를 가집니다.");
} else {
	console.log('일반 디스플레이의 픽셀 농도를 가집니다.');
}

// window의 화면 가로 폭

var window_w = window.innerWidth;
var window_h = window.innerHeight;

console.log('window_w:', window_w);
console.log('window_h:', window_h);

// window.scrollX
// window.pageXOffset
// window.scrollY
// window.pageYOffset

var window_scrollX = window.scrollX;
var window_scrollY = window.scrollY;

console.log('window_scrollX:', window_scrollX);
console.log('window_scrollY:', window_scrollY);


// 변수 선언만 하는 경우. 즉, 값이 대입되지 않은 경우
// undefined 값이 기본으로 할당되어 있다.
var scrollY; // undefined

// window  전역 객체의 속성 중에  scrollTop이 있는가 확인?
if (window.scrollTop) {
	scrollY = window.scrollTop;
} else {
	// = 연산자는 "할당(대입) 연산자"이다.
	scrollY = window.scrollY;
}


// window 객체의 메소드(함수)
// 메소드 (method)란?
// 객체가 소유하고 있는 함수를 가리킨다.

window.alert('다이얼로그 창을 띄움으로서 사용자에게 메시지를 보여준다');

var is_youngman = window.confirm('당신은 청년입니까?');

console.log('is_youngman:', is_youngman);

if (is_youngman) {
	console.log('취업 준비');
} else {
	console.log('노년대비');
}


// 사용자의 입력 값을 ㅂ다아 왔다면, 이를 기억해두기 위해서 변수가 필요하다.
var user_name = window.prompt('당신의 이름은 무엇입니까?', '예)아무개');

window.alert(user_name + '님 반갑습니다.');

// 자바 스크립트 함수

var count = 10;

function countDown() {
	count = count - 1;
	console.log(count);
	return count;
}

