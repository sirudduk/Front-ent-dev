#selectors

-----------------------------

|pattern         |meaning                                                  |
|                |                                                         |
|#id             |id로 지정된 요소 선택                                    |
|.class          |class로 지정된 요소 선택                                 |
|E               |E 요소 선택                                              |
|E:link          |방문하지 않은 E 선택                                     |
|E:visited       |방문한 E 선택                                            |
|E:hover         |마우스가 올라가있는동안 E 선택                           |
|E:active        |마우스 클릭,키보드 엔터키가 눌린 동안 E 선택             |
|E:focus         |focus가 머물러 있는동안 E 선택                           |
|E:first-line    |E요소의 첫번째 라인 선택                                 |
|E:first-letter  |E요소의 첫번째 문자 선택                                 |
|*               |모든 요소 선택                                           |
|E[foo]          |'foo'속성이 포함한 E 선택                                |
|E[foo="bar"]    |'foo'속성값이 'bar'를 일치하는 E선택                     |
|E[foo~="bar"]   |'foo'속성값이 'bar'를 포함하는 E선택                     |
|E[foo|="en"]    |‘foo’ 속성의 값이 ’en’ 또는 ’en-’ 으로 시작되는  E를 선택|
|E:first-child   |첫 번째 자식 요소가 E라면 선택                           |
|E:lang(fr)      |HTML lang 속성의 값이 ’fr’로 지정된 E를 선택             |
|E::before       |E 요소 전에 생성된 요소 선택	                           |
|E::after        |E 요소 후에 생성된 요소 선택                             |
|E>F             |E 요소의 자식인 F 요소 선택                              |
|E+F             |	E 요소를 뒤의 F 요소 선택                              |
|E[foo^="bar"]   |‘foo’ 속성의 값이 ’bar’로 정확하게 시작하는 요소 선택    |
|E[foo$="bar"]   |‘foo’ 속성의 값이 ’bar’로 정확하게 끝나는 요소 선택      |
|E~F             |E 요소가 앞에 존재하면 F를 선택                          |
