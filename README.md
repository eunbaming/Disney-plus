# Disney Plus 사이트

<br/>

![DisneyPlus](https://github.com/eunbaming/Disney-plus/assets/110072947/a92a6710-1bc7-41a3-ab56-2a656e67379f)

+ Demo : https://disney-plus-app-15ed7.web.app

<br/>
<br/>

### 개발 목표

+ Disney Plus 영화 사이트를 참고하여 데이터가 실존하는 api를 axios를 사용하여 영화 웹페이지 개발
+ Firebase를 이용하여 구글 로그인(소셜 네트워크 로그인), 인증 체크, 배포까지 개발

<br/>
<br/>

### 사용 기술

<a href="#"><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/></a>

<br/>
<br/>

### Advanced Feature

+ 웹사이트가 처음 로딩될 때 메인페이지를 바로 보여주는 것이 아닌, 로그인을 거치도록 구현
+ Firebase를 사용하여 로그인 버튼 클릭 시 구글 로그인을 할 수 있는 모달 창 띄워주기

![DisneyPlus](https://github.com/eunbaming/Disney-plus/assets/110072947/a92a6710-1bc7-41a3-ab56-2a656e67379f)
<br/>
![DisneyPlus](https://github.com/eunbaming/Disney-plus/assets/110072947/6ee02cf2-b351-4cf5-a622-a4266b2eb692)

<br/>

+ 로그인 시 메인페이지가 보이도록 하고, 메인페이지 Navigation 바에는 디즈니플러스 로고와 검색창, 로그아웃 버튼 기능을 구현
  
![DisneyPlus](https://github.com/eunbaming/Disney-plus/assets/110072947/df77843d-6401-486a-a820-1ecfd33a7659)

<br/>

+ 메인페이지 내 내용은 추천 슬라이드와 영화사 배너, 인기 영화, 액션 영화, 그리고 코미디 영화를 Swiper 모듈과 페이지네이션을 이용하여 터치 슬라이드 형태 구현
  
![DisneyPlus](https://github.com/eunbaming/Disney-plus/assets/110072947/250b36a5-a689-4958-aefb-31fd100917a8)

<br/>

+ 추천 슬라이드의 플레이 버튼을 누르면 해당 유튜브 예고편 영상이 나오도록 구현
  
![DisneyPlus](https://github.com/eunbaming/Disney-plus/assets/110072947/305a9a2f-226a-43e8-b354-5caec59627e2)

```javascript
...
if (isClicked) {
    return (
      <>
        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
              width="640"
              height="360"
              allow="autoplay; fullscreen"
            ></Iframe>
          </HomeContainer>
        </Container>
        <button onClick={() => setIsClicked(false)}>X</button>
      </>
    );
  }
...
```

<br/>

+ 터치 슬라이드에 있는 영화 중 원하는 것을 선택 시 해당 영화에 관련된 상세 내용이 포함된 모달 창 띄우기
  
![DisneyPlus](https://github.com/eunbaming/Disney-plus/assets/110072947/02b01dbe-b9e1-42ad-b359-8dc8d9c0f245)

<br/>

+ useRef와 React hooks을 사용하여 모달창 바깥을 눌렀을 때 자동으로 모달창이 나가지도록 구현

```javascript
...
const ref = useRef();
  console.log("modal ref", ref.current);
  useOnclickOutside(ref, () => {
    setOpenModal(false);
  });
...
```

<br/>

+ 검색창에 원하는 영화 관련 키워드를 검색 시 해당 영화들이 나오도록 구현

![DisneyPlus](https://github.com/eunbaming/Disney-plus/assets/110072947/47c05def-6993-4213-b6e9-66db63f0b14f)

<br/>
<br/>

# 개선 사항

+ 처음에 로그인 시 프로필이 잘 보이는데, 새로고침하거나 다른 것을 클릭했을 때 프로필이 사라지는 부분에 대한 해결 필요














