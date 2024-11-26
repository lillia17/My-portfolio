function toggleSkill(skillId) {
    const skillDetails = document.getElementById(skillId);
    const allSkills = document.querySelectorAll('.skill-details');

    allSkills.forEach(skill => skill.style.display = 'none');

    if (skillDetails.style.display === 'none' || skillDetails.style.display === '') {
        skillDetails.style.display = 'block';
    } else {
        skillDetails.style.display = 'none';
    }
}