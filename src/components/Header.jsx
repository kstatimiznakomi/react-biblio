
import React from "react";
import { Route } from 'react-router-dom';

function Header(props){
    return (
        <section class = "head">
  <header className="header">
    
        <img src="https://i.postimg.cc/9FpWWbkr/rd-lib.png" height={40} width={40} alt="logo"/>
  
    <nav>
      <ul className = "menu">
        
            <li>Главная</li>
        
        
            <li>Каталог</li>
        
        
            <li>О нас</li>
        
        
            <li>Профиль</li>
        
        
      </ul>
    </nav>
    
            <li>Выйти</li>
    
    
            <li>Войти</li>
    
    
            <li>Зарегистрироваться</li>
    

  </header>
</section>
    )
}

export default Header;