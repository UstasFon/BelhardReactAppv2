export const clearReview = async function() {
    let tx = db.transaction('userData', 'readwrite');
    await tx.objectStore('userData').clear();
    await list();
};

export const addReview = async function () {
    let tx = db.transaction('userData', 'readwrite');

    try {
        await tx.objectStore('userData').add(this.state);
        await list();
    } catch(err) {
        if (err.name == 'ConstraintError') {
            alert("Ваш отзыв уже добавлен");
            await addReview();
        } else {
            throw err;
        }
    }
};