#DAY6 TIL

### 진행 내용

- CSS 란?
- CSS 기본 문법
- CSS 선택자
- CSS 박스모델
- CSS 타이포그래피

-

###CSS 선택자

선택자 유형 | 설명
--- | ---
* | 전체 선택자
E | 요소 선택자
.class-name | 클래스 선택자
#id-name | 아이디 선택자
E > E | 자식 선택자
E + E | 인접 형제 선택자
E ~ E | 일반 형제 선택자

※ 자손 선택자 이용시, 마지막에 오는 선택자가 스타일이 적용될 요소이다.

-

####자식 선택자
```css
/* E(P) > E(C) */
/* 직계 자식을 가리키는 선택자. 자손 요소는 해당되지 않는다 */
nav > ul > li { ... }

<nav>
	<ul>
		/* ul 직계자손 li에만 스타일이 적용되고 */
		<li>
			<ul>
				/* 최하위 li에는 스타일 적용이 안된다 */
				<li></li>
			</ul>
		</li>
	</ul>
</nav>
```

-

####클래스 선택자

```css
/*
E.class-name (디자인 컨셉이 명확하지 않은 경우에는 사용을 자제)
.class-name (대중적으로 사용되는 방법, 코드 재사용 목적)
.class-name1.class-name2 (멀티클래스. 두 클래스를 가진 요소에 스타일이 적용된다)
.class-name1 .class-name2 (자손 선택과 동일하다. 형태적으로 멀티 클래스와 비슷하므로 햇갈리지 말자)
 */

/* 공통의 스타일 */
button { ... }
/* 개별적인 스타일 */
.button.buy { color: blue; }
.button.buy-cancel { color: red; }
/* 순서를 바꿔도 똑같이 동작한다.(IE6 제외) */

<button type="button" class="button buy">구매</button>
<button type="button" class="button buy-cancel">취소</button>

/* 네이밍은 정말 중요하다. 명시적으로 이름 짓는 연습을 하자! */
```

-

####인접 형제 선택자

> 주의점! 절대적으로 틀(프레임)이 무너지지 않아야 한다.

```html
<!-- 선택자: div>div>div -->
<div>
	<div>
		<div></div>
	</div>
</div>

<!-- 선택자: div+div+div -->
<div></div>
<div></div>
<div></div>

<!-- 선택자: div h4 + ul -->
<div>
	<!-- 첫줄 ul은 스타일 적용이 안된다 -->
	<ul><li></li></ul>
	<h4></h4>
	<!-- 스타일 적용이 된다. 다만 앞에 다른 요소가 나온다면 적용이 되지 않게 된다(h4와 인접하지 않았기 때문) -->
	<ul>
		<li></li>
	</ul>
</div>
```

-

####일반 형제 선택자

> _인접 형제 선택자와 다르다!_

```html
<!-- body > div ~ p -->
<body>
	<div></div>
	<h1></h1>
	<!-- 선택됨 -->
	<p></p>
	<h3></h3>
	<!-- 선택됨 -->
	<p></p>
	<div></div>
</body>

<!-- 인접 형제 선택자였다면 선택할 수 없다 -->
```

####속성 선택자

`[id="some-id"]` 속성 선택자는 `#some-id`와 동일하다. 이처럼 요소의 속성을 통해서 선택을 할 수 있다.

```css
/* 모든 id를 가지는 요소를 가리킴 */
[id] { ... }
/* someClass라는 특정 클래스를 가지는 요소를 가리킴  */
[class="someClass"] { ... }

/* .screen_out 선택과 다른 점은, 같은 요소임에도 다른 클래스를 가지고 있다면 스타일 적용이 안된다.
screen_out 클래스만 가지고 있는 요소를 선택한다. 즉 <div class="screen_out another_class">인경우 선택되지 않는다 */
#shopping3 [class="screen_out"] {
	border: 4px solid #303030;
}

/* 특정 조건을 걸고 속성 선택자를 사용할 수 있다. */
[class^="screen_out"] /* screen_out클래스로 시작하는 경우 */
[class$="screen_out"] /* screen_out클래스로 끝나는 경우 */
a[href="..."][class="some"] /* 여러 조건을 걸 수도 있다 */
```

-

**파일 포맷별 아이콘 설정**

![D6](../Assets/D6.jpg)

```html
<div class="lecture">
	<h2 class="lecture-title">Check File</h2>
	<!-- 모듈화된 클래스 -->
	<ul class="lecture-file-list reset-list">
		<li class="lecture-file-item"><a href="resource/file.ai">file-ai</a></li>
		<li class="lecture-file-item"><a href="resource/file.psd">file-psd</a></li>
		<li class="lecture-file-item"><a href="resource/file.avi">file-avi</a></li>
		<li class="lecture-file-item"><a href="resource/file.mov">file-mov</a></li>
		<li class="lecture-file-item"><a href="resource/file.pdf">file-pdf</a></li>
		<li class="lecture-file-item"><a href="resource/file.txt">file-txt</a></li>
	</ul>
</div>

<div class="demo">
	<!-- 모듈화된 클래스 -->
	<ul class="reset-list">
		<li><a href="">item-10</a></li>
		<li><a href="">item-11</a></li>
	</ul>
</div>
```
```css
/* 코드를 모듈화 하므로써 재사용성을 높일 수 있다 */
.reset-list {
	/* 기본적인 리스트 스타일 초기화 */
	/* 정말매우굉장히많이 사용되는 코드 */
	list-style-type: none;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
}

/* 파일 타입 이미지 제공을 위한 기본 디자인 */
.lecture-file-list a {
	display: block;
	font-size: 2.38em;
	text-decoration: none;
	text-indent: 40px;
	/* 중복된 코드 재사용을 위해 모듈화 */
	background-repeat: no-repeat;
}

/*
파일 포맷에 따라 자동적으로 아이콘을 배경 이미지로 설정하는 스타일
 */
a[href$=".psd"]{
	background-image: url("input/image/link/here");
	/* 중복 */
	/* background-repeat: no-repeat; */
}
a[href$=".ai"]{
	background-image: url("input/image/link/here");
	/* 중복 중복 */
	/* background-repeat: no-repeat; */
}
a[href$=".txt"]{
	background-image: url("input/image/link/here");
	/* 중복 중복 중복!! */
	/* background-repeat: no-repeat; */
}


/* 외부 링크 선택 조건 */
a[href^="http://"][target="_blank"]{
	background-image: url("input/image/link/here");
	background-repeat: no-repeat;
	background-posotion: 0% 4px;
}
```

-

### 기타/참고

[Adobe CC 과자](https://www.dropbox.com/sh/7pismtqusk5x8h6/AADxsqtMxv-vll737x7qJx5fa?dl=0)
