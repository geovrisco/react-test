import React from 'react';
import { render,fireEvent,cleanup} from '@testing-library/react';
import App, {AppRouter} from './App';
import { MemoryRouter } from 'react-router-dom'
import { getHeroes,getHero,filterHero } from './store/actions/heroes-action'

jest.mock('./store/actions/heroes-action')

beforeAll(() => {
    
    getHeroes.mockReturnValue({
    type: 'GET_HEROES',
    payload: {
        heroes: [
            {
                "id": 1,
                "name": "npc_dota_hero_antimage",
                "localized_name": "Anti-Mage",
                "primary_attr": "agi",
                "attack_type": "Melee",
                "roles": [
                    "Carry",
                    "Escape",
                    "Nuker"
                ],
                "img": "/apps/dota2/images/heroes/antimage_full.png?",
                "icon": "/apps/dota2/images/heroes/antimage_icon.png",
                "base_health": 200,
                "base_health_regen": 0.25,
                "base_mana": 75,
                "base_mana_regen": 0,
                "base_armor": -1,
                "base_mr": 25,
                "base_attack_min": 29,
                "base_attack_max": 33,
                "base_str": 23,
                "base_agi": 24,
                "base_int": 12,
                "str_gain": 1.3,
                "agi_gain": 3,
                "int_gain": 1.8,
                "attack_range": 150,
                "projectile_speed": 0,
                "attack_rate": 1.4,
                "move_speed": 310,
                "turn_rate": 0.5,
                "cm_enabled": true,
                "legs": 2,
                "pro_win": 45,
                "pro_pick": 96,
                "hero_id": 1,
                "pro_ban": 129,
                "1_pick": 13807,
                "1_win": 6928,
                "2_pick": 41747,
                "2_win": 21382,
                "3_pick": 66887,
                "3_win": 34522,
                "4_pick": 76554,
                "4_win": 39706,
                "5_pick": 54108,
                "5_win": 27879,
                "6_pick": 23267,
                "6_win": 12008,
                "7_pick": 7602,
                "7_win": 3749,
                "8_pick": 1330,
                "8_win": 639,
                "null_pick": 2017593,
                "null_win": 0
            },
            {
                "id": 4,
                "name": "npc_dota_hero_bloodseeker",
                "localized_name": "Bloodseeker",
                "primary_attr": "agi",
                "attack_type": "Melee",
                "roles": [
                    "Carry",
                    "Disabler",
                    "Jungler",
                    "Nuker",
                    "Initiator"
                ],
                "img": "/apps/dota2/images/heroes/bloodseeker_full.png?",
                "icon": "/apps/dota2/images/heroes/bloodseeker_icon.png",
                "base_health": 200,
                "base_health_regen": null,
                "base_mana": 75,
                "base_mana_regen": 0,
                "base_armor": 2,
                "base_mr": 25,
                "base_attack_min": 33,
                "base_attack_max": 39,
                "base_str": 24,
                "base_agi": 22,
                "base_int": 18,
                "str_gain": 2.7,
                "agi_gain": 3.4,
                "int_gain": 1.7,
                "attack_range": 150,
                "projectile_speed": 900,
                "attack_rate": 1.7,
                "move_speed": 300,
                "turn_rate": 0.5,
                "cm_enabled": true,
                "legs": 2,
                "pro_win": 72,
                "pro_pick": 146,
                "hero_id": 4,
                "pro_ban": 189,
                "1_pick": 16637,
                "1_win": 9013,
                "2_pick": 33664,
                "2_win": 18197,
                "3_pick": 42319,
                "3_win": 22735,
                "4_pick": 41382,
                "4_win": 22277,
                "5_pick": 27868,
                "5_win": 15061,
                "6_pick": 12393,
                "6_win": 6714,
                "7_pick": 4557,
                "7_win": 2400,
                "8_pick": 943,
                "8_win": 455,
                "null_pick": 1346504,
                "null_win": 0
            },
        ], filtered:null}
    })
    getHero.mockReturnValue({
        type:'',
        payload:{
            hero:[{
                "id": 4,
                "name": "npc_dota_hero_bloodseeker",
                "localized_name": "Bloodseeker",
                "primary_attr": "agi",
                "attack_type": "Melee",
                "roles": [
                    "Carry",
                    "Disabler",
                    "Jungler",
                    "Nuker",
                    "Initiator"
                ],
                "img": "/apps/dota2/images/heroes/bloodseeker_full.png?",
                "icon": "/apps/dota2/images/heroes/bloodseeker_icon.png",
                "base_health": 200,
                "base_health_regen": null,
                "base_mana": 75,
                "base_mana_regen": 0,
                "base_armor": 2,
                "base_mr": 25,
                "base_attack_min": 33,
                "base_attack_max": 39,
                "base_str": 24,
                "base_agi": 22,
                "base_int": 18,
                "str_gain": 2.7,
                "agi_gain": 3.4,
                "int_gain": 1.7,
                "attack_range": 150,
                "projectile_speed": 900,
                "attack_rate": 1.7,
                "move_speed": 300,
                "turn_rate": 0.5,
                "cm_enabled": true,
                "legs": 2,
                "pro_win": 72,
                "pro_pick": 146,
                "hero_id": 4,
                "pro_ban": 189,
                "1_pick": 16637,
                "1_win": 9013,
                "2_pick": 33664,
                "2_win": 18197,
                "3_pick": 42319,
                "3_win": 22735,
                "4_pick": 41382,
                "4_win": 22277,
                "5_pick": 27868,
                "5_win": 15061,
                "6_pick": 12393,
                "6_win": 6714,
                "7_pick": 4557,
                "7_win": 2400,
                "8_pick": 943,
                "8_win": 455,
                "null_pick": 1346504,
                "null_win": 0
            },]
        }
    })
    filterHero.mockReturnValue({
        type:'FILTER_HERO',
        payload:{
            filtered:[{
                "id": 4,
                "name": "npc_dota_hero_bloodseeker",
                "localized_name": "Bloodseeker",
                "primary_attr": "agi",
                "attack_type": "Melee",
                "roles": [
                    "Carry",
                    "Disabler",
                    "Jungler",
                    "Nuker",
                    "Initiator"
                ],
                "img": "/apps/dota2/images/heroes/bloodseeker_full.png?",
                "icon": "/apps/dota2/images/heroes/bloodseeker_icon.png",
                "base_health": 200,
                "base_health_regen": null,
                "base_mana": 75,
                "base_mana_regen": 0,
                "base_armor": 2,
                "base_mr": 25,
                "base_attack_min": 33,
                "base_attack_max": 39,
                "base_str": 24,
                "base_agi": 22,
                "base_int": 18,
                "str_gain": 2.7,
                "agi_gain": 3.4,
                "int_gain": 1.7,
                "attack_range": 150,
                "projectile_speed": 900,
                "attack_rate": 1.7,
                "move_speed": 300,
                "turn_rate": 0.5,
                "cm_enabled": true,
                "legs": 2,
                "pro_win": 72,
                "pro_pick": 146,
                "hero_id": 4,
                "pro_ban": 189,
                "1_pick": 16637,
                "1_win": 9013,
                "2_pick": 33664,
                "2_win": 18197,
                "3_pick": 42319,
                "3_win": 22735,
                "4_pick": 41382,
                "4_win": 22277,
                "5_pick": 27868,
                "5_win": 15061,
                "6_pick": 12393,
                "6_win": 6714,
                "7_pick": 4557,
                "7_win": 2400,
                "8_pick": 943,
                "8_win": 455,
                "null_pick": 1346504,
                "null_win": 0
            },]
        }
    })
})


afterEach(() => cleanup())

// test('should ', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('test the homepage', () =>{
    describe('succesfull landing on homepage' , () =>{
        test('should show home div with homepage test-id', () =>{
            const { container } = render(<App />);
            const homeCardHolder = container.querySelector("#cardHolder")
            expect(homeCardHolder.textContent).toBe('Hero Lists')
        })
    })
    describe('succesfull load content from api' , () =>{
        test('should show home div with homepage test-id', () =>{
            const { container,getByTestId } = render(<App />);
            const heroPics = getByTestId('heroes-picture1')
            expect(heroPics).toBeInTheDocument()
        })
    })
    describe('succesfull render card-holder that will contain card with heroes information' , () =>{
        test('should render card-holder that contain data from api', () =>{
            const { getByTestId } = render(<App />);
            const cardHolder = getByTestId('card-holder')
            expect(cardHolder).toBeInTheDocument();
        })
    })
})

describe('test the favourite page', () =>{
    describe('succesfull landing on favourite page', () =>{
        test('it should render favourite page', () => {
            const { getByTestId } = render (<App/>);
            const linkToFave = getByTestId('btn-fave')
            fireEvent.click(linkToFave)
            const favouritePageContainer  = getByTestId('favourite-page')
            expect(favouritePageContainer).toBeInTheDocument()
        })
    })

})

describe('Navigate Test',() => {
    describe('succesfull landing in homepage' , () => {
        test('it should render homepage', () =>{
            const {getByTestId , debug} = render(
                <MemoryRouter initialEntries={['/']}>
                    <AppRouter></AppRouter>
                </MemoryRouter>
            );
            // debug()
            const homeIndicator= getByTestId('home-indicator')
            expect (homeIndicator).toBeInTheDocument()
        })
    })

    describe('succesfull landing in Favourite' , () => {
        test('it should render Favourite Page', () =>{
            const {getByTestId , debug} = render(
                <MemoryRouter initialEntries={['/favourite']}>
                    <AppRouter></AppRouter>
                </MemoryRouter>
            );
            // debug()
            const favouritePageContainer  = getByTestId('favourite-page')
            expect(favouritePageContainer).toBeInTheDocument()
        })
    })

    describe('succesfull landing in HeroDetail' , () => {
        test('it should render Favourite Page', () =>{
            const {getByTestId , debug} = render(
                <MemoryRouter initialEntries={['/hero/1']}>
                    <AppRouter></AppRouter>
                </MemoryRouter>
            );
            // debug()
            const favouritePageContainer  = getByTestId('hero-indicator')
            expect(favouritePageContainer).toBeInTheDocument()
        })
    })


})