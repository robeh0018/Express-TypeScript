/** Types definitions */

/** Weather */
export type TWeather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";

/**---------------------------------------------------------------------------*/

/** Visibility */
export type TVisibility = "poor" | "good" | "perfect";

/**---------------------------------------------------------------------------*/

/** Diary entry */
export interface IDiaryEntry {
    id: number;
    date: string;
    weather: TWeather;
    visibility: TVisibility;
    comment: string;
}

/**---------------------------------------------------------------------------*/

/** Non-sensitive diary entry with omit and pick */
// export type TNonSensitiveDiaryEntry = Pick<IDiaryEntry, "id" | "date" | "weather" | "visibility">;
export type TNonSensitiveDiaryEntry = Omit<IDiaryEntry, "comment">;