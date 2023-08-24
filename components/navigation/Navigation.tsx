'use client'

import { PointerEventHandler, useMemo } from 'react'
import { CaretDownIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import clsx from 'clsx'
import {
    Content,
    Item,
    List,
    Root,
    Trigger,
    Viewport
} from '@radix-ui/react-navigation-menu'
import { RemoveScroll } from 'react-remove-scroll'
import { Variant, motion } from 'framer-motion'

import {
    active,
    logoContainer,
    animateIn,
    background,
    backgroundVisible,
    caret,
    contact,
    navigation,
    signIn,
    trigger,
    navList,
    navItem,
    dynamicNavBackground,
} from './Navigation.css'
import {
    backButton,
    fullSection,
    listItem,
    productsList,
    solutionsList,
    submenuContainer,
    submenuContent,
    submenuItem,
    submenuList,
    submenuSection,
    submenuSectionHeader
} from './parts/Submenu.css'
import { Logo } from './parts/Logo'
import { ScreenSize, WindowSize, useAppStore } from '@/utils/app-store'
import { button } from '../Button/Button.css'
import { h2, h4, small } from '@/style/typography.css'
import { interactable } from '@/style/interactable.css'
import { breakpoints, navExpanded, navHeight, padding } from '@/style/sizes'
import { MotionNavButton } from './parts/NavButton'
import { MotionNavLink, NavLink } from './parts/NavLink'
import { ScrollToTopButton } from './parts/ScrollToTopButton'
import { routes } from '@/sitemap'
import { clamp } from '@/utils/number'

const MotionList = motion(List)
const MotionItem = motion(Item)

const variants: Record<string, Variant> = {
    // waiting: (size: ScreenSize) => ({
    //     width: navHeight[size],
    //     height: navHeight[size],
    //     y: -navHeight[size] * 3,
    //     transition: {
    //         ease: [0.45, 0, 0.55, 1],
    //         duration: 0.4,
    //     }
    // }),
    hidden: ([size, windowSize]: [ScreenSize, WindowSize]) => ({
        width: navHeight[size],
        height: navHeight[size],
        y: 0,
        transition: {
            ease: [0.45, 0, 0.55, 1],
            duration: 0.5
        }
    }),
    initial: ([size, windowSize]: [ScreenSize, WindowSize]) => ({
        width: clamp(windowSize[0] - (padding[size] * 2), 0, breakpoints[size]),
        height: navHeight[size],
        y: 0,
        transition: {
            ease: [0.45, 0, 0.55, 1],
            duration: 0.5
        }
    }),
    expanded: ([size, windowSize]: [ScreenSize, WindowSize]) => ({
        width: clamp(windowSize[0] - (padding[size] * 2), 0, breakpoints[size]),
        height: navExpanded[size],
        y: 0,
        transition: {
            ease: [0.45, 0, 0.55, 1],
            duration: 0.3
        }
    })
}

const triggerVariants: Record<string, Variant> = {
    hidden: () => ({
        opacity: 0.0,
        x: -20,
        y: 0,
        pointerEvents: 'none',
        transition: {
            ease: [0.45, 0, 0.55, 1],
            duration: 0.2
        }
    }),
    initial: (delay: number = 0) => ({
        opacity: 0.0,
        y: 10,
        x: 0,
        pointerEvents: 'none',
        transition: {
            ease: [0.45, 0, 0.55, 1],
            duration: 0.1,
            delay: 0.0
        }
    }),
    visible: (delay: number = 0) => ({
        opacity: 1.0,
        y: 0,
        scale: 1,
        pointerEvents: 'initial',
        transition: {
            ease: [0.45, 0, 0.55, 1],
            duration: 0.2,
            delay
        }
    })
}

const backButtonVariants: Record<string, Variant> = {
    initial: () => ({
        opacity: 0.0,
        x: 25,
        pointerEvents: 'none',
        transition: {
            ease: [0.45, 0, 0.55, 1],
            duration: 0.1
        }
    }),
    visible: () => ({
        opacity: 1.0,
        x: 0,
        pointerEvents: 'initial',
        transition: {
            ease: [0.45, 0, 0.55, 1],
            duration: 0.2
        }
    })
}

const imageSize = 150

export const Navigation = () => {
    const store = useAppStore()
    const belowFold = useAppStore(
        (state) => state.scrollY > state.windowSize[1] / 2 || state.menuOpen
    )
    const [ready, size, navExpanded, menuOpen] = useAppStore((state) => [
        state.ready,
        state.size,
        state.navExpanded,
        state.menuOpen
    ])

    const preventHover: PointerEventHandler = (event) => {
        if (size === 'small') event.preventDefault()
    }

    const handleNavButtonClick = () => {
        if (store.activeNavSection) {
            store.setActiveNavSection('')
        } else {
            store.setMenuOpen(!store.menuOpen)
        }
    }

    const animate = useMemo(() => {
        if (size === 'small') {
            return menuOpen ? 'expanded' : 'initial'
        } else {
            return navExpanded ? 'expanded' : 'initial'
        }
    }, [size, navExpanded, menuOpen])

    const navItemState: 'initial' | 'visible' = useMemo(() => {
        if (size === 'small') {
            return menuOpen ? 'visible' : 'initial'
        } else {
            return 'visible'
        }
    }, [size, menuOpen])

    // useEffect(() => {
    //     store.setActiveNavSection('products')
    // }, [])

    return (
        <>
            <div
                aria-hidden
                className={clsx(
                    background,
                    (store.navExpanded || (store.size === 'small' && menuOpen)) &&
                    backgroundVisible
                )}
            />
            <ScrollToTopButton />
            <RemoveScroll enabled={store.menuOpen || navExpanded} forwardProps>
                <Root
                    className={clsx(
                        navigation,
                        store.navVisible && active,
                        store.navVisible && animateIn
                    )}
                    onValueChange={store.setActiveNavSection}
                    value={store.activeNavSection}
                >
                    <motion.div
                        className={dynamicNavBackground}
                        aria-hidden
                        custom={[size, store.windowSize]}
                        initial="hidden"
                        variants={variants}
                        animate={animate}
                    />
                    <MotionNavLink
                        href={routes.home.path}
                        className={clsx(trigger, interactable, navItem, logoContainer)}
                        variants={triggerVariants}
                        initial="initial"
                        animate={
                            size === 'small'
                                ? store.activeNavSection || store.menuOpen
                                    ? 'initial'
                                    : 'visible'
                                : navItemState
                        }
                        custom={0.15}
                    >
                        <Logo />
                    </MotionNavLink>
                    <motion.button
                        className={clsx(backButton, interactable)}
                        onClick={() => store.setActiveNavSection('')}
                        initial="initial"
                        animate={
                            size === 'small' && store.activeNavSection ? 'visible' : 'initial'
                        }
                        variants={backButtonVariants}
                    >
                        <CaretDownIcon
                            className={caret}
                            width={20}
                            height={20}
                            aria-hidden
                        />
                        Menu
                    </motion.button>

                    <MotionNavButton
                        variants={triggerVariants}
                        initial="initial"
                        animate={size === 'small' ? 'visible' : navItemState}
                        custom={0.25}
                        onClick={handleNavButtonClick}
                        menuOpen={store.menuOpen}
                    />
                    <MotionList className={clsx(navList, menuOpen && active)}>
                        <MotionItem
                            className={navItem}
                            value="products"
                            variants={triggerVariants}
                            initial="initial"
                            animate={navItemState}
                            custom={0.25}
                        >
                            <Trigger
                                className={clsx(trigger, interactable)}
                                onPointerMove={preventHover}
                                onPointerLeave={preventHover}
                            >
                                Products
                                <CaretDownIcon
                                    className={caret}
                                    width={20}
                                    height={20}
                                    aria-hidden
                                />
                            </Trigger>
                            <Content
                                className={submenuContent}
                                onPointerEnter={preventHover}
                                onPointerLeave={preventHover}
                            >
                                <section className={clsx(submenuSection, fullSection)}>
                                    <h1 className={h2}>Built for the next generation of delivery</h1>
                                </section>

                                <section className={submenuSection}>
                                    <h1 className={submenuSectionHeader}>Electric Vehicles</h1>
                                    <ul className={clsx(submenuList, productsList)}>
                                        <li className={listItem}>
                                            <NavLink
                                                href={routes.products.routes['brightdrop-zevo'].path}
                                                className={clsx(submenuItem, interactable)}
                                            >
                                                <Image
                                                    src="/assets/navigation/zevo.png"
                                                    width={imageSize}
                                                    height={imageSize}
                                                    alt="Zevo electric van"
                                                />
                                                <header>
                                                    <h2 className={h4}>BrightDrop</h2>
                                                    <h2 className={h4}>2024 Zevo 600, 400</h2>
                                                    <p className={small}>
                                                        Purpose-built electric vans with cargo capacity
                                                        options available
                                                    </p>
                                                </header>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </section>

                                <section className={submenuSection}>
                                    <h1 className={submenuSectionHeader}>Electrified Carts</h1>
                                    <ul className={clsx(submenuList, productsList)}>
                                        <li className={listItem}>
                                            <NavLink
                                                href={routes.products.routes['brightdrop-trace-grocery'].path}
                                                className={clsx(submenuItem, interactable)}
                                            >
                                                <Image
                                                    src="/assets/navigation/trace-grocery.png"
                                                    width={imageSize}
                                                    height={imageSize}
                                                    alt="Trace Grocery electric cart"
                                                />
                                                <header>
                                                    <h2 className={h4}>BrightDrop</h2>
                                                    <h2 className={h4}>Trace Grocery</h2>
                                                    <p className={small}>
                                                        Electrically propelled cart optimized for online grocery order fulfillment
                                                    </p>
                                                </header>
                                            </NavLink>
                                        </li>
                                        <li className={listItem}>
                                            <NavLink
                                                href={routes.products.routes['brightdrop-trace-move'].path}
                                                className={clsx(submenuItem, interactable)}
                                            >
                                                <Image
                                                    src="/assets/navigation/trace-move.png"
                                                    width={imageSize}
                                                    height={imageSize}
                                                    alt="Trace Move electric cart"
                                                />
                                                <header>
                                                    <h2 className={h4}>BrightDrop</h2>
                                                    <h2 className={h4}>Trace Move</h2>
                                                    <p className={small}>
                                                        Electrically propelled cart to reduce touches and increase efficiency
                                                    </p>
                                                </header>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </section>

                                <section className={submenuSection}>
                                    <h1 className={submenuSectionHeader}>Connected Software</h1>
                                    <ul className={clsx(submenuList, productsList)}>
                                        <li className={listItem}>
                                            <NavLink
                                                href={routes.products.routes['brightdrop-trace-grocery'].path}
                                                className={clsx(submenuItem, interactable)}
                                            >
                                                <Image
                                                    src="/assets/navigation/core.png"
                                                    width={imageSize}
                                                    height={imageSize}
                                                    alt="Trace Move electric cart"
                                                />
                                                <header>
                                                    <h2 className={h4}>BrightDrop</h2>
                                                    <h2 className={h4}> Core</h2>
                                                    <p className={small}>
                                                        Data and actionable insights for your fleet – right from the source
                                                    </p>
                                                </header>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </section>

                                <section className={clsx(submenuSection, fullSection)}>
                                    <NavLink
                                        href={routes.products.path}
                                        className={clsx(button.outline, interactable)}
                                    >
                                        Explore all products
                                    </NavLink>
                                </section>
                            </Content>
                        </MotionItem>
                        <MotionItem
                            className={navItem}
                            value="solutions"
                            variants={triggerVariants}
                            initial="initial"
                            animate={navItemState}
                            custom={0.3}
                        >
                            <Trigger
                                className={clsx(trigger, interactable)}
                                onPointerEnter={preventHover}
                                onPointerLeave={preventHover}
                            >
                                Industry Solutions
                                <CaretDownIcon
                                    className={caret}
                                    width={20}
                                    height={20}
                                    aria-hidden
                                />
                            </Trigger>
                            <Content
                                className={submenuContent}
                                onPointerEnter={preventHover}
                                onPointerLeave={preventHover}
                            >
                                <section className={submenuSection}>
                                    <h1 className={submenuSectionHeader}>Parcel Solutions</h1>
                                    <ul className={clsx(submenuList, solutionsList)}>
                                        <li className={listItem}>
                                            <NavLink
                                                href={routes.solutions.routes['industry-solutions-parcel'].path}
                                                className={clsx(submenuItem, interactable)}
                                            >
                                                <header>
                                                    <h2 className={h4}>Purpose-built for delivery</h2>
                                                    <p className={small}>
                                                        Last mile delivery solutions for a changing world
                                                    </p>
                                                </header>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </section>
                                <section className={submenuSection}>
                                    <h1 className={submenuSectionHeader}>Grocery Solutions</h1>
                                    <ul className={clsx(submenuList, solutionsList)}>
                                        <li className={listItem}>
                                            <NavLink
                                                href={routes.solutions.routes['industry-solutions-grocery'].path}
                                                className={clsx(submenuItem, interactable)}
                                            >
                                                <header>
                                                    <h2 className={h4}>
                                                        Designed for your grocery needs
                                                    </h2>
                                                    <p className={small}>
                                                        Solutions for online order fulfillment and curbside
                                                        pickup
                                                    </p>
                                                </header>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </section>
                            </Content>
                        </MotionItem>

                        <MotionItem
                            className={navItem}
                            variants={triggerVariants}
                            initial="initial"
                            animate={navItemState}
                            custom={0.35}
                        >
                            <NavLink
                                className={clsx(trigger, interactable)}
                                href={routes.about.path}>
                                About Us
                            </NavLink>
                        </MotionItem>
                        <MotionItem
                            className={navItem}
                            variants={triggerVariants}
                            initial="initial"
                            animate={navItemState}
                            custom={0.4}
                        >
                            <NavLink
                                className={clsx(trigger, interactable)}
                                href={routes.careers.path}>
                                Careers
                            </NavLink>
                        </MotionItem>
                        <MotionItem
                            className={navItem}
                            variants={triggerVariants}
                            initial="initial"
                            animate={navItemState}
                            custom={0.45}
                        >
                            <NavLink
                                className={clsx(trigger, interactable)}
                                href={routes.newsroom.path}>
                                Newsroom
                            </NavLink>
                        </MotionItem>
                        <MotionItem
                            className={clsx(navItem, contact)}
                            variants={triggerVariants}
                            initial="initial"
                            animate={belowFold ? navItemState : 'initial'}
                            custom={0.5}
                        >
                            <NavLink
                                className={clsx(button.primary, interactable)}
                                href={routes.contact.path}>
                                Contact sales
                            </NavLink>
                        </MotionItem>
                        <MotionItem
                            className={clsx(navItem, signIn)}
                            variants={triggerVariants}
                            initial="initial"
                            animate={navItemState}
                            custom={0.55}
                        >
                            <a
                                className={clsx(button.outline, interactable)}
                                href="https://app.gobrightdrop.com/login"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Sign in
                            </a>
                        </MotionItem>
                    </MotionList>
                    <Viewport className={clsx(submenuContainer)} />
                </Root>
            </RemoveScroll>
        </>
    )
}
