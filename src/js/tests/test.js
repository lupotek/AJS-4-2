import healthView from "../app"

test ("basic test1", () => {
    const original = healthView([
        { name: "bowman", health: 10 },
        { name: "swordsman", health: 110 },
        { name: "magician", health: 20 },
      ]);
      const result = [
       { name: "swordsman", health: 110 },
       { name: "magician", health: 20 },
       { name: "bowman", health: 10 }
      ]
      expect (original).toEqual(result)
    })
      
      