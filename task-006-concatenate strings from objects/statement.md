# Конкатенация строк из объектов

Напишите функцию getConcated(arr), которая принимает массив объектов arr и возвращает строку, сформированную по следующим правилам:

- Элементы должны быть упорядочены по полю order в порядке возрастания.
- Элементы с полем expired: true должны быть исключены.
- Поле value каждого объекта должно быть перевёрнуто (символы в обратном порядке).
- Строка не должна содержать повторяющихся символов.

Примеры:

Input 1: [{ value: "hello", order: 1, expired: false }, { value: "world", order: 2, expired: false }]
Output 1: "olehdrw"

Input 2: [{ value: "aabb", order: 1, expired: false }, { value: "bbaa", order: 2, expired: false }]
Output 2: "ba"
