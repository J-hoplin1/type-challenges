type Length<T extends any[]> = T["length"]

type tsl = ["tesla", "model 3", "model X", "model Y"]
type spx = [
  "FALCON 9",
  "falcon heavy",
  " dragon",
  "starship",
  "human spaceflight"
]

type teslaLength = Length<tsl>
type spaceLength = Length<spx>
