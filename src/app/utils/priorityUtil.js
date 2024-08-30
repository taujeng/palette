

// takes in an array of selected entries + mood of that day
// output should be an array sorted from highest prio to lowest.
// Prio: Love, then depending on mood, like or dislike
const prioritySort = (arr, mood) => {
    arr.sort((a, b) => {
        // heart gets highest priority
        if (a.reaction === "heart") return -1;
        if (b.reaction === "heart") return 1;

        // no reaction gets lowest priority
        if (a.reaction === "none") return 1;
        if (b.reaction === "none") return -1;

        // for happy/love moods, prioritize like > dislike
        if (mood === "happy" || mood === "love") {
            if (a.reaction === "like") return -1;
            if (b.reaction === "like") return 1;
        }

        // For sad/angry moods, prioritize dislike > like
        if (mood === "sad" || mood === "angry") {
            if (a.reaction === "dislike") return -1;
            if (b.reaction === "dislike") return 1;
        }

        // Default: if no mood specified, then prioritize like > dislike
        if (!mood) {
            if (a.reaction === "like") return -1;
            if (b.reaction === "like") return 1;
            if (a.reaction === "dislike") return -1;
            if (b.reaction === "dislike") return 1;
        }

        // if reactions are the same or don't match any priorities, maintain current order
        return 0;
    });
    return arr;
}

export { prioritySort }