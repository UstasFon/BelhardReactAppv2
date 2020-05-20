export const clearReview = async function() {
    let tx = window.db.transaction('userData', 'readwrite');
    await tx.objectStore('userData').clear();
};

export const addReview = async function (data) {
    let tx = window.db.transaction('userData', 'readwrite');

    try {
        await tx.objectStore('userData').add(data);
    } catch(err) {
        if (err.name == 'ConstraintError') {
            alert("Ваш отзыв уже добавлен");
            await addReview();
        } else {
            throw err;
        }
    }
};