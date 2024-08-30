import { useState, useEffect } from "react"
import { ShepherdJourneyProvider, useShepherd, } from "react-shepherd"

const DayTour = () => {

    const tourOptions = {
        defaultStepOptions: {
            classes: "custom-shepherdClass",
            cancelIcon: {
                enabled: true
            }
        },
        useModalOverlay: true
    };

    const steps:any[] = [
        {
        id: "intro",
        title: "this is the tour",
        text: "Welcome to palette! Let's explore some key features.",
        attachTo: {
            element: "",
            on: "bottom"
        },
        buttons: [
            {
                text: "skip tour",
                action: () =>  tour.cancel()
            },
            {
                text: "next",
                action: () =>  tour.next()
            },
            {
                text: '✕',
                action: () => tour.cancel(),
                classes: 'x-button' // Custom class for styling
            }
        ]
    },
    {
        id: "Mood",
        text: "How's your day going? This is where you can log your mood.",
        attachTo: {
            element: "#mood-tour",
            on: "bottom"
        },
        buttons: [
            {
                text:"back",
                action: () => tour.back()
            },
            {
                text: "next",
                action: () => tour.next()
            },
            {
                text: '✕',
                action: () => tour.cancel(),
                classes: 'x-button' // Custom class for styling
            }
        ]
    },
    {
        id: "Activities",
        text: "Select activities and add a reaction. Each activity is color-coded.",
        attachTo: {
            element: ".entry-container",
            on: "bottom"
        },
        buttons: [
            {
                text:"back",
                action: () => tour.back()
            },
            {
                text: "next",
                action: () => tour.next()
            },
            {
                text: '✕',
                action: () => tour.cancel(),
                classes: 'x-button' // Custom class for styling
            }
        ]
    },
    {
        id: "Change colors",
        text: "Choose the significance of each color. For example, activities that are green are productive.",
        attachTo: {
            element: ".colorPalette-icon",
            on: "right"
        },
        buttons: [
            {
                text:"back",
                action: () => tour.back()
            },
            {
                text: "next",
                action: () => tour.next()
            },
            {
                text: '✕',
                action: () => tour.cancel(),
                classes: 'x-button' // Custom class for styling
            }
        ]
    },
    {
        id: "End tour",
        text: "And that's it for the tour! Start adding activities using this button.",
        attachTo: {
            element: ".day-icon",
            on: "bottom"
        },
        buttons: [
            {
                text:"back",
                action: () => tour.back()
            },
            {
                text: "finish",
                action: () => tour.complete()
            },
            {
                text: '✕',
                action: () => tour.cancel(),
                classes: 'x-button' // Custom class for styling
            }
        ]

        
    },

    ]

    const Shepherd = useShepherd();
    const tour:any = new Shepherd.Tour({
        ...tourOptions,
        steps
    });

    useEffect(()=> {
        const tourSeen = localStorage.getItem("palette-tour")

        if (!tourSeen) {
            tour.start();

            tour.trackedEvents.complete = () => {
                localStorage.setItem("palette-tour", "true");
            };
            tour.trackedEvents.cancel = () => {
                localStorage.setItem("palette-tour", "true");
            };
        }
    }, [])

//   tour.start();

  return null; // doesn't render any visible UI
}

export default DayTour
