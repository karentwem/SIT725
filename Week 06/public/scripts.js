
function postActivity(activityName,activityPoints) {
    const offlineActivity = { name: activityName, pointsPerHour: activityPoints };
    $.ajax({
        type: "POST",
        url: "/controller/", 
        contentType: "application/json", // Specify content type
        data: JSON.stringify(offlineActivity), // Convert object to JSON string
        success: (result) => {
            if (result.statusCode === 201) {
                alert('activity posted');
                location.reload();
            }
        }
    });
    //Can't get this to happen within the ajax call
    alert('activity posted');
    location.reload();
}


