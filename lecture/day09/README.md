###### Front-End Develop SCHOOL

# DAY 09


### 진행 내용

- CSS 타이포그래피 속성
- CSS 레이아웃 속성

---

###CSS 타이포그래피 속성

**행간(line-height)**: normal(default)
 - 1.5 ~ 2 사이 값을 권장 (상대값을 사용하여 font-size 변동에 자동으로 반응하도록 입력)

```css
html {
	font-size: 100%;
}

body {
	width: 960px;
	margin-left: auto;
	margin-right: auto;
	font-size: 1rem;
	line-height: 1.5rem;
	background-image: url("../images/guide/leading-24px.png")
}

p {
	margin-bottom: 1.5rem;
}
```

```css
/* font-variant */

.small-caps {
	font-variant: small-caps;
}
.uppercase {
	font-variant: uppercase;
}
.lowercase {
	font-variant: lowercase;
}
.capitalize {
	font-variant: capitalize;
}
```

```css
/* font 속기 작성법 */
p {
	font: [style] [weight] [variant] size[/line-height] familly; /* [] 괄호 속성은 옵션 */
	/* variant, style, weight는 순서가 바뀌어도 상관 없음 */
}
```

```css
/* letter-spacing, word-spacing */
.spoqa {
	letter-spacing: -0.01em;
	word-spacing: 0.01em;
}
```

-

###CSS 배경 속성

####IR 테크닉(Image Replacement 기법)

```html
<h1 class="brand-tweetle"><a href>Web Design</a></h1>
```
```css
.brand-tweetle {
	display: block;
	width: 32px;
	height: 32px;
	background-image: url('...');
	background-repeat: no-repeat;
	text-indent: -9999em;
}

/* 이미지와 겹친 텍스트를 보이지 않게 하지만 스크린리더가 읽을 수 있다. 접근성 이슈가 있다.  */
```

-

###CSS 레이아웃

####display
 - block: 폭은 부모만큼, 높이는 자식만큼 갖는다.
 - inline: 폭, 높이를 자식만큼 갖는다.
 - inline-block: 외부는 inline처럼, 내부는 block 처럼 작동
 - none: 보이지 않는다. 스크린리더에도 읽히지 않음.

####overflow
 - visible: 기본값
 - hidden: 부모보다 넘치는 자식은 보이지 않음
 - auto: 내용이 넘칠경우 스크롤이 생김
 - scroll: 내용이 넘치지 않아도 스크롤이 보임

####float

본래 목적은 이미지 주변으로 텍스트를 둘러싸기 위함이다.

```css
/* 모듈화 */
.align-left {
	float: left;
	margin-right: 1em;
}
.align-right {
	float: right;
	margin-left: 1em;
}
```

 - float 속성을 부여하면 z축(모니터 위쪽)으로 부유하게 된다.
 - 여러 박스의 높낮이를 다르게 설정한 후 float을 주면 float drop 현상이 일어난다.(테트리스 처럼)
 - 실제 레이아웃을 위한 목적이 아니므로 float 속성을 이용할 경우 버라이어티한 경험을 할 수 있다.

> 실제로 코딩을하며 체득합시다!

---

### 기타/참고

- [HTML5 안티 앨리어싱](http://www.html5rocks.com/ko/tutorials/internals/antialiasing-101/)
