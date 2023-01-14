const { User } = require('../../models');

const findUserBiometrics = async (username) => {
    try {
        const userBiometrics = await User.findOne({ where: { id }, include: 'biometrics'});
        return userBiometrics;
    } catch(error) {
        throw error;
    }
}

const createUserBiometrics = async (
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
) => {
    try {
        const user = await User.findOne({ where: {username: username} });
        const userBiometrics = await Biometrics.create({
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
            triglycerides,
            userId: user.id,
        });
        return userBiometrics;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    findUserBiometrics,
    createUserBiometrics,
}