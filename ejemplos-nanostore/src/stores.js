import { atom } from "nanostores"

export const $darkMode = atom(false)

/*
$darkMode.get() -> bool
$darkMode.set(bool)

bool | number | string | arrays

*/

export const $currentUser = atom(null)

export const $cookPoint = atom("raw")

// Number List

export const $numberList = atom([1, 2, 3])

export const addRandomNumber = () => {
    const numbers = $numberList.get();
    const rndNum = 1 + Math.floor(Math.random() * 10)
    $numberList.set([...numbers, rndNum])
}

export const resetNumberList = () => $numberList.set([])

