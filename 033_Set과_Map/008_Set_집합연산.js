//008 집합 연산

// 1. 교집합
Set.prototype.intersection = function (set) {
    const result = new Set();

    for (const value of set) {
        // 2개의 set의 요소가 공통되는 요소이면 교집합의 대상이다.
        if (this.has(value)) result.add(value);
    }

    return result;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA와 setB의 교집합
console.log(setA.intersection(setB)); // Set(2) {2, 4}
// setB와 setA의 교집합
console.log(setB.intersection(setA)); // Set(2) {2, 4}

// 아래와 같은 방법으로 도 가능하다.
Set.prototype.intersection = function (set) {
    return new Set([...this].filter(v => set.has(v)));
};


// 2. 합집합

Set.prototype.union = function (set) {
    // this(Set 객체)를 복사
    const result = new Set(this);

    for (const value of set) {
        // 합집합은 2개의 Set 객체의 모든 요소로 구성된 집합이다. 중복된 요소는 포함되지 않는다.
        result.add(value);
    }

    return result;
};

// setA와 setB의 합집합
console.log(setA.union(setB)); // Set(4) {1, 2, 3, 4}
// setB와 setA의 합집합
console.log(setB.union(setA)); // Set(4) {2, 4, 1, 3}

// 아래와 같은 방법으로도 가능하다.
Set.prototype.union = function (set) {
    return new Set([...this, ...set]);
};


// 3. 차집합

Set.prototype.difference = function (set) {
    // this(Set 객체)를 복사
    const result = new Set(this);

    for (const value of set) {
        // 차집합은 어느 한쪽 집합에는 존재하지만 다른 한쪽 집합에는 존재하지 않는 요소로 구성된 집합이다.
        result.delete(value);
    }

    return result;
};

// setA에 대한 setB의 차집합
console.log(setA.difference(setB)); // Set(2) {1, 3}
// setB에 대한 setA의 차집합
console.log(setB.difference(setA)); // Set(0) {}

// 아래와 같은 방법으로도 가능하다.

Set.prototype.difference = function (set) {
    return new Set([...this].filter(v => !set.has(v)));
};

// 4. 부분 집합과 상위 집합
Set.prototype.isSuperset = function (subset) {
    for (const value of subset) {
        // superset의 모든 요소가 subset의 모든 요소를 포함하는지 확인
        if (!this.has(value)) return false;
    }

    return true;
};

// setA가 setB의 상위 집합인지 확인한다.
console.log(setA.isSuperset(setB)); // true
// setB가 setA의 상위 집합인지 확인한다.
console.log(setB.isSuperset(setA)); // false

//아래와 같은 방법으로도 가능하다.