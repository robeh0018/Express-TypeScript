import {Request, Response} from "express";

/** types import */
import {IDiaryEntry, TNonSensitiveDiaryEntry} from "../types";

/** Diaries data import */
import diariesData from "../diaries.json";

/**----------------------------------------------------------------------------*/

/** Diaries data initialization */
const diaries: IDiaryEntry[] = diariesData as IDiaryEntry[];

/**----------------------------------------------------------------------------*/

/**
 * Retrieves all entries from the diaries.
 * @param _req - The HTTP request object not used.
 * @param res - The HTTP response object.
 */
export const getEntries = (_req: Request, res: Response): void => {
    // Send the diaries as the response
    res.send(diaries);
};

/**----------------------------------------------------------------------------*/

/**
 * Get non-sensitive entries from the diaries array.
 * @param _req - The HTTP request object not used.
 * @param res - The HTTP response object.
 */
export const getEntriesNonSensitive = (_req: Request, res: Response): void => {
    try {
        // Map the diaries array to create a new array of non-sensitive diary entries
        const nonSensitiveDiaries: TNonSensitiveDiaryEntry[] = diaries.map(diary => ({
            id: diary.id,
            date: diary.date,
            weather: diary.weather,
            visibility: diary.visibility,
        }));

        // Send the diaries as the response
        res.send(nonSensitiveDiaries);
    } catch (e) {
        res.status(500).send('getEntriesNonSensitive error: ' + e);
    }
};

/**----------------------------------------------------------------------------*/

/**
 * Retrieve an entry from the diaries list by its id.
 *
 * @param req - The request object containing the id parameter.
 * @param res - The response object to send the entry.
 * @returns void
 */
export const getEntryById = (req: Request, res: Response): void => {
    try {
        // Find the entry in the diaries list with the matching id
        const entry = diaries.find(diary => diary.id === +req.params.id);

        // Send a 404 error if the entry is not found
        if (!entry) {
            // res.sendStatus(404);
            res.status(404).send("Entry not found");
        }

        // Send the entry as the response
        res.send(entry);
    } catch (e) {
        res.status(500).send('getEntryById error: ' + e);
    }
};

/**----------------------------------------------------------------------------*/

/**
 * Add a new diary entry to the diaries list.
 *
 * @param req - The request object containing the diary entry details.
 * @param res - The response object to send the updated diaries list.
 */
export const addDiary = (req: Request, res: Response): void => {
    try {
        // Extract the data from the request
        const {date, weather, visibility, comment} = req.body;

        // Check if the request body is missing
        if (!date || !weather || !visibility || !comment) {
            res.status(400).send('Request body is missing');
        }

        // Generate a new entry with the provided data
        const newDiary: IDiaryEntry = {
            id: Math.max(...diaries.map(diary => diary.id)) + 1,
            date,
            weather,
            visibility,
            comment,
        }

        // Add the new entry to the diaries list
        const updatedDiaries = [...diaries, newDiary];

        // Send the updated diaries list as the response
        res.send(updatedDiaries);
    } catch (e) {
        res.status(500).send('addDiary error: ' + e);
    }
};
