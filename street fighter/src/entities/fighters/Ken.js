import { FighterState } from "../../constants/fighter.js";
import { Fighter } from "./Fighter.js";

export class Ken extends Fighter {
  constructor(x, y, velocity) {
    super("Ken", x, y, velocity);

    this.image = document.querySelector('img[alt="ken"]');

    this.frames = new Map([
      [
        "forwards-1",
        [
          [4, 870, 60, 86],
          [27, 81],
        ],
      ],
      [
        "forwards-2",
        [
          [67, 866, 64, 90],
          [35, 86],
        ],
      ],
      [
        "forwards-3",
        [
          [139, 865, 66, 92],
          [35, 87],
        ],
      ],
      [
        "forwards-4",
        [
          [214, 864, 65, 93],
          [29, 88],
        ],
      ],
      [
        "forwards-5",
        [
          [283, 865, 60, 91],
          [25, 87],
        ],
      ],
      [
        "forwards-6",
        [
          [352, 866, 59, 91],
          [25, 86],
        ],
      ],
      // MOVE BACKWARDS
      [
        "backwards-1",
        [
          [413, 867, 67, 90],
          [27, 81],
        ],
      ],
      [
        "backwards-2",
        [
          [485, 865, 63, 92],
          [35, 86],
        ],
      ],
      [
        "backwards-3",
        [
          [554, 863, 62, 93],
          [35, 86],
        ],
      ],
      [
        "backwards-4",
        [
          [628, 863, 60, 92],
          [29, 88],
        ],
      ],
      [
        "backwards-5",
        [
          [700, 864, 61, 93],
          [25, 87],
        ],
      ],
      [
        "backwards-6",
        [
          [771, 865, 60, 92],
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
