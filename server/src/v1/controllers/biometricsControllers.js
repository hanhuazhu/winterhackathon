const {
    findUserBiometrics,
    createUserBiometrics,
    // destroyUserBiometrics,
} = require('../services/biometricsServices');

const getUserBiometrics = async (req, res) => {
    try {
        const { username } = req.body;
        const userBiometrics = await findUserBiometrics(username);
        res.json({
            status: 'OK',
            data: userBiometrics,
        });
    } catch (error) {
        res
            .status(500)
            .send({
                status: 'FAILED',
            });
    }
};

const postUserBiometrics = async (req, res) => {
    try {
        const {
            username,
            height,
            weight,
            age,
            bmi,
            blood_pressure,
            pulse,
            fbg,
            exercise_history,
            smoking,
            current_exercise,
            cholesterol_levels,
            triglycerides
        } = req.body;
        const userBiometrics = await createUserBiometrics(
            username,
            height,
            weight,
            age,
            bmi,
            blood_pressure,
            pulse,
            fbg,
            exercise_history,
            smoking,
            current_exercise,
            cholesterol_levels,
            triglycerides
        );
        res.json({
            status: 'OK',
            data: userBiometrics,
        });
    } catch (error) {
        console.log(error)
        res
            .status(500)
            .send({
                status: 'FAILED',
            });
    }
};

// const deleteOneUser = async (req, res) => {
//     try {
//         const username = req.params.id;
//         const oneUser = await destroyOneUser(username);
//         res.json({
//             status: 'OK',
//             data: oneUser,
//         });
//     } catch (error) {
//         res
//             .status(500)
//             .send({
//                 status: 'FAILED',
//             });
//     }
// };

module.exports = {
    getUserBiometrics,
    postUserBiometrics,
    // deleteUserBiometrics,
}