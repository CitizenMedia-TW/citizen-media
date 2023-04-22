# 建議用無痕模式試用

## 預覽效果
### LoginPage
![image](https://user-images.githubusercontent.com/87169493/233775914-20822888-e33f-4659-8ced-625f8e8a4855.png)
  - 從「我的文章」上方的 "Login First" 進入
  - 點擊 "RegisterPage" 的 "Login" 進入

### RegisterPage
![螢幕擷取畫面 2023-04-22 170602](https://user-images.githubusercontent.com/87169493/233775662-b3b4798d-8e35-4de0-aace-0871d4e791bb.png)
  - 點擊 "LoginPage" 的 "Create Account" 進入

---  

## 社群登入按鈕  
### Google  
![螢幕擷取畫面 2023-04-22 175145](https://user-images.githubusercontent.com/87169493/233776962-25b8eb71-855d-4dea-9fb9-756383bfe3f0.png)
- 因為 css 屬性修改失敗，因此所有登入按鈕的 css 都先以 Google 的為準  

### Facebook  
![螢幕擷取畫面 2023-04-22 174030](https://user-images.githubusercontent.com/87169493/233776381-ffffa582-7051-408c-827f-bb6f05943838.png)  
- 登入後 e-mail / Facebook 會發送通知

---  

## 使用套件   
- [React Google Login](https://www.npmjs.com/package/react-google-login)  
  經測試該套件無法成功套用 className ，所以只能先使用[內建參數](https://developers.google.com/identity/gsi/web/reference/js-reference?hl=zh-tw#theme)  

  註：This package has been deprecated，所以之後可能要找替代方案  
  ![螢幕擷取畫面 2023-04-22 171738](https://user-images.githubusercontent.com/87169493/233775594-479975f7-b4c4-4d30-acd9-dd62351a11e8.png)  

- [React Facebook Login](https://www.npmjs.com/package/react-facebook-login)  
  使用 cssClass 參數能修改 tailwind css 設定  

---  

## Client Id  
- 目前的 Client Id 為測試用，之後請記得申請正式 Id  
- Client Id 皆儲存在 citizen-media\src\Components\Pages\LoginPage\Client_Id.jsx  

---  

## Client Id 申請教學
- [Google Client Id](https://blog.logrocket.com/guide-adding-google-login-react-app/)  
- [Facebook Client Id](https://youtu.be/8m1M3AW5bBE)  
