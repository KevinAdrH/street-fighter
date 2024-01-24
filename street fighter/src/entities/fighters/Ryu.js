import { FighterState } from "../../constants/fighter.js";
import { Fighter } from "./Fighter.js";

export class Ryu extends Fighter {
  constructor(x, y, velocity) {
    super("Ryu", x, y, velocity);

    this.image = document.querySelector('img[alt="ryu"]');

    this.frames = new Map([
      // MOVE FORWARDS
      [
        "forwards-1",
        [
          [8, 134, 56, 86],
          [27, 81],
        ],
      ],
      [
        "forwards-2",
        [
          [77, 129, 64, 91],
          [35, 86],
        ],
      ],
      [
        "forwards-3",
        [
          [149, 127, 68, 94],
          [35, 86],
        ],
      ],
      [
        "forwards-4",
        [
          [226, 129, 67, 92],
          [29, 88],
        ],
      ],
      [
        "forwards-5",
        [
          [304, 127, 59, 93],
          [25, 87],
        ],
      ],
      [
        "forwards-6",
        [
          [369, 127, 53, 91],
          [25, 86],
        ],
      ],

      // MOVE BACKWARDS
      [
        "backwards-1",
        [
          [425, 122, 68, 93],
          [27, 81],
        ],
      ],
      [
        "backwards-2",
        [
          [492, 123, 61, 92],
          [35, 86],
        ],
      ],
      [
        "backwards-3",
        [
          [557, 123, 63, 93],
          [35, 86],
        ],
      ],
      [
        "backwards-4",
        [
          [628, 124, 62, 94],
          [29, 88],
        ],
      ],
      [
        "backwards-5",
        [
          [703, 125, 62, 92],
          [25, 87],
        ],
      ],
      [
        "backwards-6",
        [
          [774, 126, 67, 90],
          [25, 86],
        ],
      ],
    ]);
    this.animations = {
      [FighterState.WALK_FORWARD]: [
        "forwards-1",
        "forwards-2",
        "forwards-3",
        "forwards-4",
        "forwards-5",
        "forwards-6",
      ],
      [FighterState.WALK_BACKWARD]: [
        "backwards-1",
        "backwards-2",
        "backwards-3",
        "backwards-4",
        "backwards-5",
        "backwards-6",
      ],
    };
  }
}
