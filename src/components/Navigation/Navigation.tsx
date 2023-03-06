import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import useWindowDimensions from "@/hooks/useWindowDimensions";

import Logo from "@/assets/image/Logo.svg";

import styles from "./Navigation.module.scss";

export const Navigation: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const { height, width } = useWindowDimensions();
  const [menuActive, setMenuActive] = useState(false);
  const navMenuTitles = [
    { title: "Главная", path: "/" },
    { title: "Цены", path: "/price" },
    { title: "Услуги", path: "/services" },
    { title: "Каталог", path: "/catalog" },
    { title: "Галлерея", path: "/gallery" },
    { title: "О нас", path: "/about" },
    { title: "Контакты", path: "/contacts" },
  ];

  let activeStyle = {
    textDecoration: "underline",
  };

  const MenuActiveHandler = () => {
    menuActive ? setMenuActive(false) : setMenuActive(true);
    if (width < 1024) {
      menuActive
        ? (document.body.style.overflow = "visible")
        : (document.body.style.overflow = "hidden");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/*  ============= NewMenu =========== */}
      <header
        aria-label="Site Header"
        className={cn(
          "fixed w-full top-0 left-[50%] translate-x-[-50%] z-20 bg-white lg:bg-transparent",
          scrollTop > 0 ? "lg:bg-white" : "lg:bg-transparent"
        )}
      >
        <div className="w-full lg:mx-auto lg:max-w-screen-xl sm:px-6 lg:px-8">
          <div
            className={cn(
              "relative flex h-16 lg:h-32 items-center justify-between lg:justify-center lg:gap-8",
              scrollTop > 0 ? "lg:h-16" : "lg:h-32"
            )}
          >
            <div className={cn("flex items-center md:gap-12 h-16 lg:h-32 overflow-hidden transition-all",scrollTop > 0 ? "lg:h-16" : "lg:h-32")}>
              <a className="block" href="/">
                <img
                  src={Logo}
                  alt="Logo"
                  className={cn(
                    "h-32 items-center",
                    scrollTop > 0 ? "" : ""
                  )}
                />
              </a>
            </div>
            {/* menu burger icon */}
            <div
              className={cn(
                "lg:hidden mr-4",
                styles.burger__icon,
                menuActive ? styles._active : ""
              )}
              onClick={MenuActiveHandler}
            >
              <span></span>
            </div>
            {/* menu body */}
            <nav
              aria-label="Site Nav"
              className={cn(
                "block md:block",
                styles.burger_body,
                menuActive ? styles._active : ""
              )}
              onClick={MenuActiveHandler}
            >
              <ul className="flex flex-col lg:flex-row items-center lg:gap-8 text-lg font-sans z-20">
                {navMenuTitles.map((el) => (
                  <li
                    onClick={() => {
                      scroll(0, 0);
                    }}
                  >
                    <NavLink
                      className={cn(
                        "text-black transition hover:text-gray-500/75 lg:dark:text-white dark:hover:text-white/75",
                        scrollTop > 0 ? "lg:dark:text-black" : styles.link ,
                        
                      )}
                      to={el.path}
                      style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    >
                      {el.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </header>

      {/*  ============= subMenu =========== */}
      {/* <nav
        className={cn(
          "container mx-auto " + styles.subMenuBody,
          subMenuActive ? styles.active : ""
        )}
      >
        <ul
          className={cn(styles.subMenuList, subMenuActive ? styles.active : "")}
        >
          <li>
            <Link to="/price">Цены</Link>
          </li>
          <li>
            <Link to="/price">Шумоизоляция дверей</Link>
          </li>
          <li>
            <Link to="/price">Ламинированные панели</Link>
          </li>
          <li>
            <Link to="/price">Оформление проема</Link>
          </li>
          <li>
            <Link to="/price">Перетяжка дверей</Link>
          </li>
          <li>
            <Link to="/price">Обивка негорючей винилиокожей</Link>
          </li>
          <li>
            <Link to="/price">Подогрев коробки</Link>
          </li>
          <li>
            <Link to="/price">Виброизоляция дверей</Link>
          </li>
          <li>
            <Link to="/price">Ремонт дверей</Link>
          </li>
          <li>
            <Link to="/wall">Обивка стен</Link>
          </li>
          <li>
            <Link to="/price">Замена замков</Link>
          </li>
          <li>
            <Link to="/price">Варианты рисунков</Link>
          </li>
          <li>
            <Link to="/price">Видеонаблюдение</Link>
          </li>
          <li>
            <Link to="/price">Обтяжка гвоздей и пуговиц</Link>
          </li>
          <li>
            <Link to="/price">Видео-инструкция</Link>
          </li>
        </ul>
      </nav> */}
      {/*  ============= subMenu =========== */}
    </>
  );
};
