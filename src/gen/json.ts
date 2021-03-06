import * as uwu from '../out/api.json';
export var json = {
    "auth": {
        "email": {
            "get": [
                {
                    "title": "auth_email_get_signup_settings",
                    "description": "Get the signup required settings and profile fields.",
                    "ajax": false,
                    "login": false,
                    "args": [],
                    "response": "type reponse = {\n    namefields: {}[]\n    passwordpolicy: string\n    sitepolicy: string\n    sitepolicyhandler: string\n    defaultcity: string\n    country: string\n    profilefields: {\n        id: number\n        shortname: string\n        name: string\n        datatype: string\n        description: string\n        descriptionformat: number\n        categoryid: number\n        categoryname: string\n        sortorder: number\n        required: number\n        locked: number\n        visible: number\n        forceunique: number\n        signup: number\n        defaultdata: string\n        defaultdataformat: number\n        param1: string\n        param2: string\n        param3: string\n        param4: string\n        param5: string\n    }[]\n    recaptchapublickey: string\n    recaptchachallengehash: string\n    recaptchachallengeimage: string\n    recaptchachallengejs: string\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        }
    },
    "core": {
        "auth": {
            "is": [
                {
                    "title": "core_auth_is_age_digital_consent_verification_enabled",
                    "description": "Checks if age digital consent verification is enabled.",
                    "ajax": true,
                    "login": false,
                    "args": [],
                    "response": "type reponse = {\n    status: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_auth_is_minor",
                    "description": "Requests a check if a user is a digital minor.",
                    "ajax": true,
                    "login": false,
                    "args": [
                        {
                            "title": "age",
                            "structure": "int   //Age"
                        },
                        {
                            "title": "country",
                            "structure": "string   //Country of residence"
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "calendar": {
            "create": [
                {
                    "title": "core_calendar_create_calendar_events",
                    "description": "Create calendar events",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "events",
                            "structure": "list of (   //eventobject {name string   //event namedescription string  Default to \"null\" //Descriptionformat int  Default to \"1\" //description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)courseid int  Default to \"0\" //course idgroupid int  Default to \"0\" //group idrepeats int  Default to \"0\" //number of repeatseventtype string  Default to \"user\" //Event typetimestart int  Default to \"1570118730\" //timestarttimeduration int  Default to \"0\" //time durationvisible int  Default to \"1\" //visiblesequence int  Default to \"1\" //sequence})"
                        }
                    ],
                    "response": "type reponse = {\n    events: {\n        id: number\n        name: string\n        description: string\n        format: number\n        courseid: number\n        groupid: number\n        userid: number\n        repeatid: number\n        modulename: string\n        instance: number\n        eventtype: string\n        timestart: number\n        timeduration: number\n        visible: number\n        uuid: string\n        sequence: number\n        timemodified: number\n        subscriptionid: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "get": [
                {
                    "title": "core_calendar_get_action_events_by_course",
                    "description": "Get calendar action events by course",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "courseid",
                            "structure": "int   //Course id"
                        },
                        {
                            "title": "timesortfrom",
                            "structure": "int  Default to \"null\" //Time sort from"
                        },
                        {
                            "title": "timesortto",
                            "structure": "int  Default to \"null\" //Time sort to"
                        },
                        {
                            "title": "aftereventid",
                            "structure": "int  Default to \"0\" //The last seen event id"
                        },
                        {
                            "title": "limitnum",
                            "structure": "int  Default to \"20\" //Limit number"
                        }
                    ],
                    "response": "type reponse = {\n    events: {\n        id: number\n        name: string\n        description: string\n        descriptionformat: number\n        categoryid: number\n        groupid: number\n        userid: number\n        repeatid: number\n        eventcount: number\n        modulename: string\n        instance: number\n        eventtype: string\n        timestart: number\n        timeduration: number\n        timesort: number\n        visible: number\n        timemodified: number\n        icon: {\n            key: string\n            component: string\n            alttext: string\n        }\n        category: {\n            id: number\n            name: string\n            idnumber: string\n            description: string\n            parent: number\n            coursecount: number\n            visible: number\n            timemodified: number\n            depth: number\n            nestedname: string\n            url: string\n        }\n        course: {\n            id: number\n            fullname: string\n            shortname: string\n            idnumber: string\n            summary: string\n            summaryformat: number\n            startdate: number\n            enddate: number\n            fullnamedisplay: string\n            viewurl: string\n        }\n        subscription: {\n            displayeventsource: number\n            subscriptionname: string\n            subscriptionurl: string\n        }\n        canedit: number\n        candelete: number\n        deleteurl: string\n        editurl: string\n        viewurl: string\n        formattedtime: string\n        isactionevent: number\n        iscourseevent: number\n        iscategoryevent: number\n        groupname: string\n        url: string\n        action: {\n            name: string\n            url: string\n            itemcount: number\n            actionable: number\n            showitemcount: number\n        }\n    }[]\n    firstid: number\n    lastid: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_calendar_get_action_events_by_courses",
                    "description": "Get calendar action events by courses",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": "list of ( int   //Course id)"
                        },
                        {
                            "title": "timesortfrom",
                            "structure": "int  Default to \"null\" //Time sort from"
                        },
                        {
                            "title": "timesortto",
                            "structure": "int  Default to \"null\" //Time sort to"
                        },
                        {
                            "title": "limitnum",
                            "structure": "int  Default to \"10\" //Limit number"
                        }
                    ],
                    "response": "type reponse = {\n    groupedbycourse: {\n        events: {\n            id: number\n            name: string\n            description: string\n            descriptionformat: number\n            categoryid: number\n            groupid: number\n            userid: number\n            repeatid: number\n            eventcount: number\n            modulename: string\n            instance: number\n            eventtype: string\n            timestart: number\n            timeduration: number\n            timesort: number\n            visible: number\n            timemodified: number\n            icon: {\n                key: string\n                component: string\n                alttext: string\n            }\n            category: {\n                id: number\n                name: string\n                idnumber: string\n                description: string\n                parent: number\n                coursecount: number\n                visible: number\n                timemodified: number\n                depth: number\n                nestedname: string\n                url: string\n            }\n            course: {\n                id: number\n                fullname: string\n                shortname: string\n                idnumber: string\n                summary: string\n                summaryformat: number\n                startdate: number\n                enddate: number\n                fullnamedisplay: string\n                viewurl: string\n            }\n            subscription: {\n                displayeventsource: number\n                subscriptionname: string\n                subscriptionurl: string\n            }\n            canedit: number\n            candelete: number\n            deleteurl: string\n            editurl: string\n            viewurl: string\n            formattedtime: string\n            isactionevent: number\n            iscourseevent: number\n            iscategoryevent: number\n            groupname: string\n            url: string\n            action: {\n                name: string\n                url: string\n                itemcount: number\n                actionable: number\n                showitemcount: number\n            }\n        }[]\n        firstid: number\n        lastid: number\n        courseid: number\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_calendar_get_action_events_by_timesort",
                    "description": "Get calendar action events by tiemsort",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "timesortfrom",
                            "structure": "int  Default to \"0\" //Time sort from"
                        },
                        {
                            "title": "timesortto",
                            "structure": "int  Default to \"null\" //Time sort to"
                        },
                        {
                            "title": "aftereventid",
                            "structure": "int  Default to \"0\" //The last seen event id"
                        },
                        {
                            "title": "limitnum",
                            "structure": "int  Default to \"20\" //Limit number"
                        },
                        {
                            "title": "limittononsuspendedevents",
                            "structure": "int  Default to \"\" //Limit the events to courses the user is not suspended in"
                        }
                    ],
                    "response": "type reponse = {\n    events: {\n        id: number\n        name: string\n        description: string\n        descriptionformat: number\n        categoryid: number\n        groupid: number\n        userid: number\n        repeatid: number\n        eventcount: number\n        modulename: string\n        instance: number\n        eventtype: string\n        timestart: number\n        timeduration: number\n        timesort: number\n        visible: number\n        timemodified: number\n        icon: {\n            key: string\n            component: string\n            alttext: string\n        }\n        category: {\n            id: number\n            name: string\n            idnumber: string\n            description: string\n            parent: number\n            coursecount: number\n            visible: number\n            timemodified: number\n            depth: number\n            nestedname: string\n            url: string\n        }\n        course: {\n            id: number\n            fullname: string\n            shortname: string\n            idnumber: string\n            summary: string\n            summaryformat: number\n            startdate: number\n            enddate: number\n            fullnamedisplay: string\n            viewurl: string\n        }\n        subscription: {\n            displayeventsource: number\n            subscriptionname: string\n            subscriptionurl: string\n        }\n        canedit: number\n        candelete: number\n        deleteurl: string\n        editurl: string\n        viewurl: string\n        formattedtime: string\n        isactionevent: number\n        iscourseevent: number\n        iscategoryevent: number\n        groupname: string\n        url: string\n        action: {\n            name: string\n            url: string\n            itemcount: number\n            actionable: number\n            showitemcount: number\n        }\n    }[]\n    firstid: number\n    lastid: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_calendar_get_calendar_day_view",
                    "description": "Fetch the day view data for a calendar",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "year",
                            "structure": "int   //Year to be viewed"
                        },
                        {
                            "title": "month",
                            "structure": "int   //Month to be viewed"
                        },
                        {
                            "title": "day",
                            "structure": "int   //Day to be viewed"
                        },
                        {
                            "title": "courseid",
                            "structure": "int  Default to \"1\" //Course being viewed"
                        },
                        {
                            "title": "categoryid",
                            "structure": "int  Default to \"null\" //Category being viewed"
                        }
                    ],
                    "response": "type reponse = {\n    events: {\n        id: number\n        name: string\n        description: string\n        descriptionformat: number\n        categoryid: number\n        groupid: number\n        userid: number\n        repeatid: number\n        eventcount: number\n        modulename: string\n        instance: number\n        eventtype: string\n        timestart: number\n        timeduration: number\n        timesort: number\n        visible: number\n        timemodified: number\n        icon: {\n            key: string\n            component: string\n            alttext: string\n        }\n        category: {\n            id: number\n            name: string\n            idnumber: string\n            description: string\n            parent: number\n            coursecount: number\n            visible: number\n            timemodified: number\n            depth: number\n            nestedname: string\n            url: string\n        }\n        course: {\n            id: number\n            fullname: string\n            shortname: string\n            idnumber: string\n            summary: string\n            summaryformat: number\n            startdate: number\n            enddate: number\n            fullnamedisplay: string\n            viewurl: string\n        }\n        subscription: {\n            displayeventsource: number\n            subscriptionname: string\n            subscriptionurl: string\n        }\n        canedit: number\n        candelete: number\n        deleteurl: string\n        editurl: string\n        viewurl: string\n        formattedtime: string\n        isactionevent: number\n        iscourseevent: number\n        iscategoryevent: number\n        groupname: string\n        url: string\n        islastday: number\n        calendareventtype: string\n        popupname: string\n        mindaytimestamp: number\n        mindayerror: string\n        maxdaytimestamp: number\n        maxdayerror: string\n        draggable: number\n    }[]\n    defaulteventcontext: number\n    filter_selector: string\n    courseid: number\n    categoryid: number\n    neweventtimestamp: number\n    date: {\n        seconds: number\n        minutes: number\n        hours: number\n        mday: number\n        wday: number\n        mon: number\n        year: number\n        yday: number\n        weekday: string\n        month: string\n        timestamp: number\n    }\n    periodname: string\n    previousperiod: {\n        seconds: number\n        minutes: number\n        hours: number\n        mday: number\n        wday: number\n        mon: number\n        year: number\n        yday: number\n        weekday: string\n        month: string\n        timestamp: number\n    }\n    previousperiodlink: string\n    previousperiodname: string\n    nextperiod: {\n        seconds: number\n        minutes: number\n        hours: number\n        mday: number\n        wday: number\n        mon: number\n        year: number\n        yday: number\n        weekday: string\n        month: string\n        timestamp: number\n    }\n    nextperiodname: string\n    nextperiodlink: string\n    larrow: string\n    rarrow: string\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_calendar_get_calendar_event_by_id",
                    "description": "Get calendar event by id",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "eventid",
                            "structure": "int   //The event id to be retrieved"
                        }
                    ],
                    "response": "type reponse = {\n    event: {\n        id: number\n        name: string\n        description: string\n        descriptionformat: number\n        categoryid: number\n        groupid: number\n        userid: number\n        repeatid: number\n        eventcount: number\n        modulename: string\n        instance: number\n        eventtype: string\n        timestart: number\n        timeduration: number\n        timesort: number\n        visible: number\n        timemodified: number\n        icon: {\n            key: string\n            component: string\n            alttext: string\n        }\n        category: {\n            id: number\n            name: string\n            idnumber: string\n            description: string\n            parent: number\n            coursecount: number\n            visible: number\n            timemodified: number\n            depth: number\n            nestedname: string\n            url: string\n        }\n        course: {\n            id: number\n            fullname: string\n            shortname: string\n            idnumber: string\n            summary: string\n            summaryformat: number\n            startdate: number\n            enddate: number\n            fullnamedisplay: string\n            viewurl: string\n        }\n        subscription: {\n            displayeventsource: number\n            subscriptionname: string\n            subscriptionurl: string\n        }\n        canedit: number\n        candelete: number\n        deleteurl: string\n        editurl: string\n        viewurl: string\n        formattedtime: string\n        isactionevent: number\n        iscourseevent: number\n        iscategoryevent: number\n        groupname: string\n        url: string\n        action: {\n            name: string\n            url: string\n            itemcount: number\n            actionable: number\n            showitemcount: number\n        }\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_calendar_get_calendar_events",
                    "description": "Get calendar events",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "events",
                            "structure": " Default to \"Array\n(\n)\n\" //Event detailsobject {eventids  Default to \"Array\n(\n)\n\" //List of event idslist of (int   //event ids)courseids  Default to \"Array\n(\n)\n\" //List of course ids for which events will be returnedlist of (int   //course ids)groupids  Default to \"Array\n(\n)\n\" //List of group ids for which events should be returnedlist of (int   //group ids)categoryids  Default to \"Array\n(\n)\n\" //List of category ids for which events will be returnedlist of (int   //Category ids)}"
                        },
                        {
                            "title": "options",
                            "structure": " Default to \"Array\n(\n)\n\" //Optionsobject {userevents int  Default to \"1\" //Set to true to return current user's user eventssiteevents int  Default to \"1\" //Set to true to return global eventstimestart int  Default to \"0\" //Time from which events should be returnedtimeend int  Default to \"0\" //Time to which the events should be returned. We treat 0 and null as no endignorehidden int  Default to \"1\" //Ignore hidden events or not}"
                        }
                    ],
                    "response": "type reponse = {\n    events: {\n        id: number\n        name: string\n        description: string\n        format: number\n        courseid: number\n        categoryid: number\n        groupid: number\n        userid: number\n        repeatid: number\n        modulename: string\n        instance: number\n        eventtype: string\n        timestart: number\n        timeduration: number\n        visible: number\n        uuid: string\n        sequence: number\n        timemodified: number\n        subscriptionid: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_calendar_get_calendar_monthly_view",
                    "description": "Fetch the monthly view data for a calendar",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "year",
                            "structure": "int   //Month to be viewed"
                        },
                        {
                            "title": "month",
                            "structure": "int   //Year to be viewed"
                        },
                        {
                            "title": "courseid",
                            "structure": "int  Default to \"1\" //Course being viewed"
                        },
                        {
                            "title": "categoryid",
                            "structure": "int  Default to \"null\" //Category being viewed"
                        },
                        {
                            "title": "includenavigation",
                            "structure": "int  Default to \"1\" //Whether to show course navigation"
                        },
                        {
                            "title": "mini",
                            "structure": "int  Default to \"\" //Whether to return the mini month view or not"
                        }
                    ],
                    "response": "type reponse = {\n    url: string\n    courseid: number\n    categoryid: number\n    filter_selector: string\n    weeks: {\n        prepadding: {}[]\n        postpadding: {}[]\n        days: {\n            seconds: number\n            minutes: number\n            hours: number\n            mday: number\n            wday: number\n            year: number\n            yday: number\n            istoday: number\n            isweekend: number\n            timestamp: number\n            neweventtimestamp: number\n            viewdaylink: string\n            events: {\n                id: number\n                name: string\n                description: string\n                descriptionformat: number\n                categoryid: number\n                groupid: number\n                userid: number\n                repeatid: number\n                eventcount: number\n                modulename: string\n                instance: number\n                eventtype: string\n                timestart: number\n                timeduration: number\n                timesort: number\n                visible: number\n                timemodified: number\n                icon: {\n                    key: string\n                    component: string\n                    alttext: string\n                }\n                category: {\n                    id: number\n                    name: string\n                    idnumber: string\n                    description: string\n                    parent: number\n                    coursecount: number\n                    visible: number\n                    timemodified: number\n                    depth: number\n                    nestedname: string\n                    url: string\n                }\n                course: {\n                    id: number\n                    fullname: string\n                    shortname: string\n                    idnumber: string\n                    summary: string\n                    summaryformat: number\n                    startdate: number\n                    enddate: number\n                    fullnamedisplay: string\n                    viewurl: string\n                }\n                subscription: {\n                    displayeventsource: number\n                    subscriptionname: string\n                    subscriptionurl: string\n                }\n                canedit: number\n                candelete: number\n                deleteurl: string\n                editurl: string\n                viewurl: string\n                formattedtime: string\n                isactionevent: number\n                iscourseevent: number\n                iscategoryevent: number\n                groupname: string\n                url: string\n                islastday: number\n                calendareventtype: string\n                popupname: string\n                mindaytimestamp: number\n                mindayerror: string\n                maxdaytimestamp: number\n                maxdayerror: string\n                draggable: number\n            }[]\n            hasevents: number\n            calendareventtypes: {}[]\n            previousperiod: number\n            nextperiod: number\n            navigation: string\n            haslastdayofevent: number\n            popovertitle: string\n        }[]\n    }[]\n    daynames: {\n        dayno: number\n        shortname: string\n        fullname: string\n    }[]\n    view: string\n    date: {\n        seconds: number\n        minutes: number\n        hours: number\n        mday: number\n        wday: number\n        mon: number\n        year: number\n        yday: number\n        weekday: string\n        month: string\n        timestamp: number\n    }\n    periodname: string\n    includenavigation: number\n    initialeventsloaded: number\n    previousperiod: {\n        seconds: number\n        minutes: number\n        hours: number\n        mday: number\n        wday: number\n        mon: number\n        year: number\n        yday: number\n        weekday: string\n        month: string\n        timestamp: number\n    }\n    previousperiodlink: string\n    previousperiodname: string\n    nextperiod: {\n        seconds: number\n        minutes: number\n        hours: number\n        mday: number\n        wday: number\n        mon: number\n        year: number\n        yday: number\n        weekday: string\n        month: string\n        timestamp: number\n    }\n    nextperiodname: string\n    nextperiodlink: string\n    larrow: string\n    rarrow: string\n    defaulteventcontext: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_calendar_get_calendar_upcoming_view",
                    "description": "Fetch the upcoming view data for a calendar",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "courseid",
                            "structure": "int  Default to \"1\" //Course being viewed"
                        },
                        {
                            "title": "categoryid",
                            "structure": "int  Default to \"null\" //Category being viewed"
                        }
                    ],
                    "response": "type reponse = {\n    events: {\n        id: number\n        name: string\n        description: string\n        descriptionformat: number\n        categoryid: number\n        groupid: number\n        userid: number\n        repeatid: number\n        eventcount: number\n        modulename: string\n        instance: number\n        eventtype: string\n        timestart: number\n        timeduration: number\n        timesort: number\n        visible: number\n        timemodified: number\n        icon: {\n            key: string\n            component: string\n            alttext: string\n        }\n        category: {\n            id: number\n            name: string\n            idnumber: string\n            description: string\n            parent: number\n            coursecount: number\n            visible: number\n            timemodified: number\n            depth: number\n            nestedname: string\n            url: string\n        }\n        course: {\n            id: number\n            fullname: string\n            shortname: string\n            idnumber: string\n            summary: string\n            summaryformat: number\n            startdate: number\n            enddate: number\n            fullnamedisplay: string\n            viewurl: string\n        }\n        subscription: {\n            displayeventsource: number\n            subscriptionname: string\n            subscriptionurl: string\n        }\n        canedit: number\n        candelete: number\n        deleteurl: string\n        editurl: string\n        viewurl: string\n        formattedtime: string\n        isactionevent: number\n        iscourseevent: number\n        iscategoryevent: number\n        groupname: string\n        url: string\n        islastday: number\n        calendareventtype: string\n        popupname: string\n        mindaytimestamp: number\n        mindayerror: string\n        maxdaytimestamp: number\n        maxdayerror: string\n        draggable: number\n    }[]\n    defaulteventcontext: number\n    filter_selector: string\n    courseid: number\n    categoryid: number\n    isloggedin: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "cohort": {
            "add": [
                {
                    "title": "core_cohort_add_cohort_members",
                    "description": "Adds cohort members.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "members",
                            "structure": "list of ( object {cohorttype object {type string   //The name of the field: id                                    (numeric value of cohortid) or idnumber (alphanumeric value of idnumber) value string   //The value of the cohort}usertype object {type string   //The name of the field: id                                    (numeric value of id) or username (alphanumeric value of username) value string   //The value of the cohort}})"
                        }
                    ],
                    "response": "type reponse = {\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "delete": [
                {
                    "title": "core_cohort_delete_cohort_members",
                    "description": "Deletes cohort members.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "members",
                            "structure": "list of ( object {cohortid int   //cohort record iduserid int   //user id})"
                        }
                    ],
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_cohort_delete_cohorts",
                    "description": "Deletes all specified cohorts.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "cohortids",
                            "structure": "list of ( int   //cohort ID)"
                        }
                    ],
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "update": [
                {
                    "title": "core_cohort_update_cohorts",
                    "description": "Updates existing cohorts.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "cohorts",
                            "structure": "list of ( object {id int   //ID of the cohortcategorytype object {type string   //the name of the field: id (numeric value                                    of course category id) or idnumber (alphanumeric value of idnumber course category)                                    or system (value ignored)value string   //the value of the categorytype}name string   //cohort nameidnumber string   //cohort idnumberdescription string  Optional //cohort descriptiondescriptionformat int  Default to \"1\" //description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)visible int  Optional //cohort visibletheme string  Optional //the cohort theme. The allowcohortthemes setting must be enabled on Moodle})"
                        }
                    ],
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "competency": {
            "add": [
                {
                    "title": "core_competency_add_competency_to_course",
                    "description": "Add the competency to a course",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseid",
                            "structure": "int   //The course id"
                        },
                        {
                            "title": "competencyid",
                            "structure": "int   //The competency id"
                        }
                    ],
                    "response": "General structure\nint   //True if successful.",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_add_competency_to_plan",
                    "description": "Add the competency to a learning plan",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "planid",
                            "structure": "int   //The plan id"
                        },
                        {
                            "title": "competencyid",
                            "structure": "int   //The competency id"
                        }
                    ],
                    "response": "General structure\nint   //True if successful.",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_add_competency_to_template",
                    "description": "Add the competency to a template",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "templateid",
                            "structure": "int   //The template id"
                        },
                        {
                            "title": "competencyid",
                            "structure": "int   //The competency id"
                        }
                    ],
                    "response": "General structure\nint   //True if successful.",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_add_related_competency",
                    "description": "Adds a related competency",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "competencyid",
                            "structure": "int   //The competency id"
                        },
                        {
                            "title": "relatedcompetencyid",
                            "structure": "int   //The related competency id"
                        }
                    ],
                    "response": "General structure\nint   //True if successful.",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "competency": [
                {
                    "title": "core_competency_competency_framework_viewed",
                    "description": "Log event competency framework viewed",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The competency framework id"
                        }
                    ],
                    "response": "General structure\nint   //True if the event competency framework was logged",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_competency_viewed",
                    "description": "Log event competency viewed",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The competency id"
                        }
                    ],
                    "response": "General structure\nint   //True if the event competency viewed was logged",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "count": [
                {
                    "title": "core_competency_count_competencies",
                    "description": "Count a list of a competencies.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "filters",
                            "structure": "list of ( object {column string   //Column name to filter byvalue string   //Value to filter by. Must be exact match})"
                        }
                    ],
                    "response": "General structure\nint   //The number of competencies found.",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_count_competencies_in_course",
                    "description": "List the competencies in a course",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The course id"
                        }
                    ],
                    "response": "General structure\nint   //The number of competencies in this course.",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_count_competencies_in_template",
                    "description": "Count a list of a competencies for a given template.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The template id"
                        }
                    ],
                    "response": "General structure\nint   //The number of competencies in this learning plan template.",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_count_competency_frameworks",
                    "description": "Count a list of a competency frameworks.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "context",
                            "structure": "object {contextid int  Default to \"0\" //Context ID. Either use this value, or level and instanceid.contextlevel string  Default to \"\" //Context level. To be used with instanceid.instanceid int  Default to \"0\" //Context instance ID. To be used with level}"
                        },
                        {
                            "title": "includes",
                            "structure": "string  Default to \"children\" //What other contextes to fetch the frameworks from. (children, parents, self)"
                        }
                    ],
                    "response": "General structure\nint   //The number of competency frameworks found.",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_count_courses_using_competency",
                    "description": "List the courses using a competency",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The competency id"
                        }
                    ],
                    "response": "General structure\nint   //The number of courses using this competency",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_count_templates",
                    "description": "Count a list of a learning plan templates.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "context",
                            "structure": "object {contextid int  Default to \"0\" //Context ID. Either use this value, or level and instanceid.contextlevel string  Default to \"\" //Context level. To be used with instanceid.instanceid int  Default to \"0\" //Context instance ID. To be used with level}"
                        },
                        {
                            "title": "includes",
                            "structure": "string  Default to \"children\" //What other contextes to fetch the frameworks from. (children, parents, self)"
                        }
                    ],
                    "response": "General structure\nint   //The number of learning plan templates found.",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_count_templates_using_competency",
                    "description": "Count a list of a learning plan templates for a given competency.\n                    ",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The competency id"
                        }
                    ],
                    "response": "General structure\nint   //The number of learning plan templates using this competency",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "create": [
                {
                    "title": "core_competency_create_competency_framework",
                    "description": "Creates new competency frameworks.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "competencyframework",
                            "structure": "object {shortname string   //shortnameidnumber string   //idnumberdescription string  Default to \"\" //descriptiondescriptionformat int  Default to \"1\" //description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)visible int  Default to \"1\" //visiblescaleid int   //scaleidscaleconfiguration string   //scaleconfigurationcontextid int  Optional //The context idcontextlevel string  Optional //The context levelinstanceid int  Optional //The Instance idtaxonomies string  Default to \"\" //taxonomiestimecreated int  Default to \"0\" //timecreatedtimemodified int  Default to \"0\" //timemodifiedusermodified int  Default to \"0\" //usermodified}"
                        }
                    ],
                    "response": "type reponse = {\n    shortname: string\n    idnumber: string\n    description: string\n    descriptionformat: number\n    visible: number\n    scaleid: number\n    scaleconfiguration: string\n    contextid: number\n    taxonomies: string\n    id: number\n    timecreated: number\n    timemodified: number\n    usermodified: number\n    canmanage: number\n    competenciescount: number\n    contextname: string\n    contextnamenoprefix: string\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_create_plan",
                    "description": "Creates a learning plan.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "plan",
                            "structure": "object {name string   //namedescription string  Default to \"\" //descriptiondescriptionformat int  Default to \"1\" //description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)userid int   //useridtemplateid int  Default to \"null\" //templateidorigtemplateid int  Default to \"null\" //origtemplateidstatus int  Default to \"0\" //statusduedate int  Default to \"0\" //duedatereviewerid int  Default to \"null\" //revieweridtimecreated int  Default to \"0\" //timecreatedtimemodified int  Default to \"0\" //timemodifiedusermodified int  Default to \"0\" //usermodified}"
                        }
                    ],
                    "response": "type reponse = {\n    name: string\n    description: string\n    descriptionformat: number\n    userid: number\n    templateid: number\n    origtemplateid: number\n    status: number\n    duedate: number\n    reviewerid: number\n    id: number\n    timecreated: number\n    timemodified: number\n    usermodified: number\n    statusname: string\n    isbasedontemplate: number\n    canmanage: number\n    canrequestreview: number\n    canreview: number\n    canbeedited: number\n    isactive: number\n    isdraft: number\n    iscompleted: number\n    isinreview: number\n    iswaitingforreview: number\n    isreopenallowed: number\n    iscompleteallowed: number\n    isunlinkallowed: number\n    isrequestreviewallowed: number\n    iscancelreviewrequestallowed: number\n    isstartreviewallowed: number\n    isstopreviewallowed: number\n    isapproveallowed: number\n    isunapproveallowed: number\n    duedateformatted: string\n    commentarea: {\n        component: string\n        commentarea: string\n        itemid: number\n        courseid: number\n        contextid: number\n        cid: string\n        autostart: number\n        canpost: number\n        canview: number\n        count: number\n        collapsediconkey: string\n        displaytotalcount: number\n        displaycancel: number\n        fullwidth: number\n        linktext: string\n        notoggle: number\n        template: string\n        canpostorhascomments: number\n    }\n    reviewer: {\n        id: number\n        email: string\n        idnumber: string\n        phone1: string\n        phone2: string\n        department: string\n        institution: string\n        fullname: string\n        identity: string\n        profileurl: string\n        profileimageurl: string\n        profileimageurlsmall: string\n    }\n    template: {\n        shortname: string\n        description: string\n        descriptionformat: number\n        duedate: number\n        visible: number\n        contextid: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        duedateformatted: string\n        cohortscount: number\n        planscount: number\n        canmanage: number\n        canread: number\n        contextname: string\n        contextnamenoprefix: string\n    }\n    url: string\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_create_template",
                    "description": "Creates new learning plan templates.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "template",
                            "structure": "object {shortname string   //shortnamedescription string  Default to \"\" //descriptiondescriptionformat int  Default to \"1\" //description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)duedate int  Default to \"0\" //duedatevisible int  Default to \"1\" //visiblecontextid int  Optional //The context idcontextlevel string  Optional //The context levelinstanceid int  Optional //The Instance idtimecreated int  Default to \"0\" //timecreatedtimemodified int  Default to \"0\" //timemodifiedusermodified int  Default to \"0\" //usermodified}"
                        }
                    ],
                    "response": "type reponse = {\n    shortname: string\n    description: string\n    descriptionformat: number\n    duedate: number\n    visible: number\n    contextid: number\n    id: number\n    timecreated: number\n    timemodified: number\n    usermodified: number\n    duedateformatted: string\n    cohortscount: number\n    planscount: number\n    canmanage: number\n    canread: number\n    contextname: string\n    contextnamenoprefix: string\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_create_user_evidence_competency",
                    "description": "Create an evidence of prior learning relationship with a\n                        competency.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userevidenceid",
                            "structure": "int   //The user evidence ID."
                        },
                        {
                            "title": "competencyid",
                            "structure": "int   //The competency ID."
                        }
                    ],
                    "response": "type reponse = {\n    userevidenceid: number\n    competencyid: number\n    id: number\n    timecreated: number\n    timemodified: number\n    usermodified: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "delete": [
                {
                    "title": "core_competency_delete_competency_framework",
                    "description": "Delete a competency framework.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //Data base record id for the framework"
                        }
                    ],
                    "response": "General structure\nint   //True if the delete was successful",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_delete_evidence",
                    "description": "Delete an evidence",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The evidence ID"
                        }
                    ],
                    "response": "General structure\nint   //The success",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_delete_plan",
                    "description": "Delete a learning plan.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //Data base record id for the learning plan"
                        }
                    ],
                    "response": "General structure\nint   //True if the delete was successful",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_delete_template",
                    "description": "Delete a learning plan template.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //Data base record id for the template"
                        },
                        {
                            "title": "deleteplans",
                            "structure": "int   //Boolean to indicate if plans must be deleted"
                        }
                    ],
                    "response": "General structure\nint   //True if the delete was successful",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_delete_user_evidence",
                    "description": "Delete an evidence of prior learning.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The user evidence ID."
                        }
                    ],
                    "response": "General structure\nint   //True if the delete was successful",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_delete_user_evidence_competency",
                    "description": "Delete an evidence of prior learning relationship with a\n                        competency.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userevidenceid",
                            "structure": "int   //The user evidence ID."
                        },
                        {
                            "title": "competencyid",
                            "structure": "int   //The competency ID."
                        }
                    ],
                    "response": "General structure\nint   //True if the delete was successful",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "list": [
                {
                    "title": "core_competency_list_competencies",
                    "description": "Load a list of a competencies.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "filters",
                            "structure": "list of ( object {column string   //Column name to filter byvalue string   //Value to filter by. Must be exact match})"
                        },
                        {
                            "title": "sort",
                            "structure": "string  Default to \"\" //Column to sort by."
                        },
                        {
                            "title": "order",
                            "structure": "string  Default to \"\" //Sort direction. Should be either ASC or DESC"
                        },
                        {
                            "title": "skip",
                            "structure": "int  Default to \"0\" //Skip this number of records before returning results"
                        },
                        {
                            "title": "limit",
                            "structure": "int  Default to \"0\" //Return this number of records at most."
                        }
                    ],
                    "response": "type reponse = {\n    shortname: string\n    idnumber: string\n    description: string\n    descriptionformat: number\n    sortorder: number\n    parentid: number\n    path: string\n    ruleoutcome: number\n    ruletype: string\n    ruleconfig: string\n    scaleid: number\n    scaleconfiguration: string\n    competencyframeworkid: number\n    id: number\n    timecreated: number\n    timemodified: number\n    usermodified: number\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_list_competencies_in_template",
                    "description": "Load a list of a competencies for a given template.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The template id"
                        }
                    ],
                    "response": "type reponse = {\n    shortname: string\n    idnumber: string\n    description: string\n    descriptionformat: number\n    sortorder: number\n    parentid: number\n    path: string\n    ruleoutcome: number\n    ruletype: string\n    ruleconfig: string\n    scaleid: number\n    scaleconfiguration: string\n    competencyframeworkid: number\n    id: number\n    timecreated: number\n    timemodified: number\n    usermodified: number\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_list_competency_frameworks",
                    "description": "Load a list of a competency frameworks.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "sort",
                            "structure": "string  Default to \"shortname\" //Column to sort by."
                        },
                        {
                            "title": "order",
                            "structure": "string  Default to \"\" //Sort direction. Should be either ASC or DESC"
                        },
                        {
                            "title": "skip",
                            "structure": "int  Default to \"0\" //Skip this number of records before returning results"
                        },
                        {
                            "title": "limit",
                            "structure": "int  Default to \"0\" //Return this number of records at most."
                        },
                        {
                            "title": "context",
                            "structure": "object {contextid int  Default to \"0\" //Context ID. Either use this value, or level and instanceid.contextlevel string  Default to \"\" //Context level. To be used with instanceid.instanceid int  Default to \"0\" //Context instance ID. To be used with level}"
                        },
                        {
                            "title": "includes",
                            "structure": "string  Default to \"children\" //What other contextes to fetch the frameworks from. (children, parents, self)"
                        },
                        {
                            "title": "onlyvisible",
                            "structure": "int  Default to \"\" //Only visible frameworks will be returned if visible true"
                        },
                        {
                            "title": "query",
                            "structure": "string  Default to \"\" //A query string to filter the results"
                        }
                    ],
                    "response": "type reponse = {\n    shortname: string\n    idnumber: string\n    description: string\n    descriptionformat: number\n    visible: number\n    scaleid: number\n    scaleconfiguration: string\n    contextid: number\n    taxonomies: string\n    id: number\n    timecreated: number\n    timemodified: number\n    usermodified: number\n    canmanage: number\n    competenciescount: number\n    contextname: string\n    contextnamenoprefix: string\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_list_course_competencies",
                    "description": "List the competencies in a course",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The course id"
                        }
                    ],
                    "response": "type reponse = {\n    competency: {\n        shortname: string\n        idnumber: string\n        description: string\n        descriptionformat: number\n        sortorder: number\n        parentid: number\n        path: string\n        ruleoutcome: number\n        ruletype: string\n        ruleconfig: string\n        scaleid: number\n        scaleconfiguration: string\n        competencyframeworkid: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n    }\n    coursecompetency: {\n        courseid: number\n        competencyid: number\n        sortorder: number\n        ruleoutcome: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n    }\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_list_plan_competencies",
                    "description": "List the competencies in a plan",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The plan ID."
                        }
                    ],
                    "response": "type reponse = {\n    competency: {\n        shortname: string\n        idnumber: string\n        description: string\n        descriptionformat: number\n        sortorder: number\n        parentid: number\n        path: string\n        ruleoutcome: number\n        ruletype: string\n        ruleconfig: string\n        scaleid: number\n        scaleconfiguration: string\n        competencyframeworkid: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n    }\n    usercompetency: {\n        userid: number\n        competencyid: number\n        status: number\n        reviewerid: number\n        proficiency: number\n        grade: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        canrequestreview: number\n        canreview: number\n        gradename: string\n        isrequestreviewallowed: number\n        iscancelreviewrequestallowed: number\n        isstartreviewallowed: number\n        isstopreviewallowed: number\n        isstatusidle: number\n        isstatusinreview: number\n        isstatuswaitingforreview: number\n        proficiencyname: string\n        reviewer: {\n            id: number\n            email: string\n            idnumber: string\n            phone1: string\n            phone2: string\n            department: string\n            institution: string\n            fullname: string\n            identity: string\n            profileurl: string\n            profileimageurl: string\n            profileimageurlsmall: string\n        }\n        statusname: string\n        url: string\n    }\n    usercompetencyplan: {\n        userid: number\n        competencyid: number\n        proficiency: number\n        grade: number\n        planid: number\n        sortorder: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        gradename: string\n        proficiencyname: string\n    }\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_list_templates",
                    "description": "Load a list of a learning plan templates.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "sort",
                            "structure": "string  Default to \"\" //Column to sort by."
                        },
                        {
                            "title": "order",
                            "structure": "string  Default to \"\" //Sort direction. Should be either ASC or DESC"
                        },
                        {
                            "title": "skip",
                            "structure": "int  Default to \"0\" //Skip this number of records before returning results"
                        },
                        {
                            "title": "limit",
                            "structure": "int  Default to \"0\" //Return this number of records at most."
                        },
                        {
                            "title": "context",
                            "structure": "object {contextid int  Default to \"0\" //Context ID. Either use this value, or level and instanceid.contextlevel string  Default to \"\" //Context level. To be used with instanceid.instanceid int  Default to \"0\" //Context instance ID. To be used with level}"
                        },
                        {
                            "title": "includes",
                            "structure": "string  Default to \"children\" //What other contexts to fetch the templates from. (children, parents, self)"
                        },
                        {
                            "title": "onlyvisible",
                            "structure": "int  Default to \"\" //If should list only visible templates"
                        }
                    ],
                    "response": "type reponse = {\n    shortname: string\n    description: string\n    descriptionformat: number\n    duedate: number\n    visible: number\n    contextid: number\n    id: number\n    timecreated: number\n    timemodified: number\n    usermodified: number\n    duedateformatted: string\n    cohortscount: number\n    planscount: number\n    canmanage: number\n    canread: number\n    contextname: string\n    contextnamenoprefix: string\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_list_templates_using_competency",
                    "description": "Load a list of a learning plan templates for a given competency.\n                    ",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The competency id"
                        }
                    ],
                    "response": "type reponse = {\n    shortname: string\n    description: string\n    descriptionformat: number\n    duedate: number\n    visible: number\n    contextid: number\n    id: number\n    timecreated: number\n    timemodified: number\n    usermodified: number\n    duedateformatted: string\n    cohortscount: number\n    planscount: number\n    canmanage: number\n    canread: number\n    contextname: string\n    contextnamenoprefix: string\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_list_user_plans",
                    "description": "List a user's learning plans.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int   //The user ID"
                        }
                    ],
                    "response": "type reponse = {\n    name: string\n    description: string\n    descriptionformat: number\n    userid: number\n    templateid: number\n    origtemplateid: number\n    status: number\n    duedate: number\n    reviewerid: number\n    id: number\n    timecreated: number\n    timemodified: number\n    usermodified: number\n    statusname: string\n    isbasedontemplate: number\n    canmanage: number\n    canrequestreview: number\n    canreview: number\n    canbeedited: number\n    isactive: number\n    isdraft: number\n    iscompleted: number\n    isinreview: number\n    iswaitingforreview: number\n    isreopenallowed: number\n    iscompleteallowed: number\n    isunlinkallowed: number\n    isrequestreviewallowed: number\n    iscancelreviewrequestallowed: number\n    isstartreviewallowed: number\n    isstopreviewallowed: number\n    isapproveallowed: number\n    isunapproveallowed: number\n    duedateformatted: string\n    commentarea: {\n        component: string\n        commentarea: string\n        itemid: number\n        courseid: number\n        contextid: number\n        cid: string\n        autostart: number\n        canpost: number\n        canview: number\n        count: number\n        collapsediconkey: string\n        displaytotalcount: number\n        displaycancel: number\n        fullwidth: number\n        linktext: string\n        notoggle: number\n        template: string\n        canpostorhascomments: number\n    }\n    reviewer: {\n        id: number\n        email: string\n        idnumber: string\n        phone1: string\n        phone2: string\n        department: string\n        institution: string\n        fullname: string\n        identity: string\n        profileurl: string\n        profileimageurl: string\n        profileimageurlsmall: string\n    }\n    template: {\n        shortname: string\n        description: string\n        descriptionformat: number\n        duedate: number\n        visible: number\n        contextid: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        duedateformatted: string\n        cohortscount: number\n        planscount: number\n        canmanage: number\n        canread: number\n        contextname: string\n        contextnamenoprefix: string\n    }\n    url: string\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "plan": [
                {
                    "title": "core_competency_plan_cancel_review_request",
                    "description": "Cancel the review of a plan.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The plan ID"
                        }
                    ],
                    "response": "General structure\nint   //The success",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_plan_request_review",
                    "description": "Request for a plan to be reviewed.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The plan ID"
                        }
                    ],
                    "response": "General structure\nint   //The success",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_plan_start_review",
                    "description": "Start the review of a plan.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The plan ID"
                        }
                    ],
                    "response": "General structure\nint   //The success",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_plan_stop_review",
                    "description": "Stop the review of a plan.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The plan ID"
                        }
                    ],
                    "response": "General structure\nint   //The success",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "read": [
                {
                    "title": "core_competency_read_competency",
                    "description": "Load a summary of a competency.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //Data base record id for the competency"
                        }
                    ],
                    "response": "type reponse = {\n    shortname: string\n    idnumber: string\n    description: string\n    descriptionformat: number\n    sortorder: number\n    parentid: number\n    path: string\n    ruleoutcome: number\n    ruletype: string\n    ruleconfig: string\n    scaleid: number\n    scaleconfiguration: string\n    competencyframeworkid: number\n    id: number\n    timecreated: number\n    timemodified: number\n    usermodified: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_read_competency_framework",
                    "description": "Load a summary of a competency framework.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //Data base record id for the framework"
                        }
                    ],
                    "response": "type reponse = {\n    shortname: string\n    idnumber: string\n    description: string\n    descriptionformat: number\n    visible: number\n    scaleid: number\n    scaleconfiguration: string\n    contextid: number\n    taxonomies: string\n    id: number\n    timecreated: number\n    timemodified: number\n    usermodified: number\n    canmanage: number\n    competenciescount: number\n    contextname: string\n    contextnamenoprefix: string\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_read_plan",
                    "description": "Load a learning plan.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //Data base record id for the plan"
                        }
                    ],
                    "response": "type reponse = {\n    name: string\n    description: string\n    descriptionformat: number\n    userid: number\n    templateid: number\n    origtemplateid: number\n    status: number\n    duedate: number\n    reviewerid: number\n    id: number\n    timecreated: number\n    timemodified: number\n    usermodified: number\n    statusname: string\n    isbasedontemplate: number\n    canmanage: number\n    canrequestreview: number\n    canreview: number\n    canbeedited: number\n    isactive: number\n    isdraft: number\n    iscompleted: number\n    isinreview: number\n    iswaitingforreview: number\n    isreopenallowed: number\n    iscompleteallowed: number\n    isunlinkallowed: number\n    isrequestreviewallowed: number\n    iscancelreviewrequestallowed: number\n    isstartreviewallowed: number\n    isstopreviewallowed: number\n    isapproveallowed: number\n    isunapproveallowed: number\n    duedateformatted: string\n    commentarea: {\n        component: string\n        commentarea: string\n        itemid: number\n        courseid: number\n        contextid: number\n        cid: string\n        autostart: number\n        canpost: number\n        canview: number\n        count: number\n        collapsediconkey: string\n        displaytotalcount: number\n        displaycancel: number\n        fullwidth: number\n        linktext: string\n        notoggle: number\n        template: string\n        canpostorhascomments: number\n    }\n    reviewer: {\n        id: number\n        email: string\n        idnumber: string\n        phone1: string\n        phone2: string\n        department: string\n        institution: string\n        fullname: string\n        identity: string\n        profileurl: string\n        profileimageurl: string\n        profileimageurlsmall: string\n    }\n    template: {\n        shortname: string\n        description: string\n        descriptionformat: number\n        duedate: number\n        visible: number\n        contextid: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        duedateformatted: string\n        cohortscount: number\n        planscount: number\n        canmanage: number\n        canread: number\n        contextname: string\n        contextnamenoprefix: string\n    }\n    url: string\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_read_template",
                    "description": "Load a summary of a learning plan template.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //Data base record id for the template"
                        }
                    ],
                    "response": "type reponse = {\n    shortname: string\n    description: string\n    descriptionformat: number\n    duedate: number\n    visible: number\n    contextid: number\n    id: number\n    timecreated: number\n    timemodified: number\n    usermodified: number\n    duedateformatted: string\n    cohortscount: number\n    planscount: number\n    canmanage: number\n    canread: number\n    contextname: string\n    contextnamenoprefix: string\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_read_user_evidence",
                    "description": "Read an evidence of prior learning.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The user evidence ID."
                        }
                    ],
                    "response": "type reponse = {\n    userid: number\n    name: string\n    description: string\n    descriptionformat: number\n    url: string\n    id: number\n    timecreated: number\n    timemodified: number\n    usermodified: number\n    canmanage: number\n    competencycount: number\n    competencies: {\n        shortname: string\n        idnumber: string\n        description: string\n        descriptionformat: number\n        sortorder: number\n        parentid: number\n        path: string\n        ruleoutcome: number\n        ruletype: string\n        ruleconfig: string\n        scaleid: number\n        scaleconfiguration: string\n        competencyframeworkid: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n    }[]\n    filecount: number\n    files: {\n        contextid: number\n        component: string\n        filearea: string\n        itemid: number\n        filepath: string\n        filename: string\n        isdir: number\n        timemodified: number\n        timecreated: number\n        filesize: number\n        author: string\n        license: string\n        filenameshort: string\n        filesizeformatted: string\n        icon: string\n        timecreatedformatted: string\n        timemodifiedformatted: string\n        url: string\n    }[]\n    hasurlorfiles: number\n    urlshort: string\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "reopen": [
                {
                    "title": "core_competency_reopen_plan",
                    "description": "Reopen learning plan.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "planid",
                            "structure": "int   //The plan id"
                        }
                    ],
                    "response": "General structure\nint   //True if reopening learning plan was successful",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "reorder": [
                {
                    "title": "core_competency_reorder_course_competency",
                    "description": "Move a course competency to a new relative sort order.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "courseid",
                            "structure": "int   //The course id"
                        },
                        {
                            "title": "competencyidfrom",
                            "structure": "int   //The competency id we are moving"
                        },
                        {
                            "title": "competencyidto",
                            "structure": "int   //The competency id we are moving to"
                        }
                    ],
                    "response": "General structure\nint   //True if successful.",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_reorder_plan_competency",
                    "description": "Move a plan competency to a new relative sort order.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "planid",
                            "structure": "int   //The plan id"
                        },
                        {
                            "title": "competencyidfrom",
                            "structure": "int   //The competency id we are moving"
                        },
                        {
                            "title": "competencyidto",
                            "structure": "int   //The competency id we are moving to"
                        }
                    ],
                    "response": "General structure\nint   //True if successful.",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_reorder_template_competency",
                    "description": "Move a template competency to a new relative sort order.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "templateid",
                            "structure": "int   //The template id"
                        },
                        {
                            "title": "competencyidfrom",
                            "structure": "int   //The competency id we are moving"
                        },
                        {
                            "title": "competencyidto",
                            "structure": "int   //The competency id we are moving to"
                        }
                    ],
                    "response": "General structure\nint   //True if successful.",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "template": [
                {
                    "title": "core_competency_template_has_related_data",
                    "description": "Check if a template has related data",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The template id"
                        }
                    ],
                    "response": "General structure\nint   //True if the template has related data",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_template_viewed",
                    "description": "Log event template viewed",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //Data base record id for the template"
                        }
                    ],
                    "response": "General structure\nint   //True if the log of the view was successful",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "update": [
                {
                    "title": "core_competency_update_competency",
                    "description": "Update a competency.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "competency",
                            "structure": "object {shortname string  Optional //shortnameidnumber string  Optional //idnumberdescription string  Optional //descriptiondescriptionformat int  Default to \"1\" //description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)sortorder int  Optional //sortorderparentid int  Optional //parentidpath string  Optional //pathruleoutcome int  Optional //ruleoutcomeruletype string  Optional //ruletyperuleconfig string  Optional //ruleconfigscaleid int  Optional //scaleidscaleconfiguration string  Optional //scaleconfigurationcompetencyframeworkid int  Optional //competencyframeworkidid int   //idtimecreated int  Optional //timecreatedtimemodified int  Optional //timemodifiedusermodified int  Optional //usermodified}"
                        }
                    ],
                    "response": "General structure\nint   //True if the update was successful",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_update_competency_framework",
                    "description": "Update a competency framework.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "competencyframework",
                            "structure": "object {shortname string  Optional //shortnameidnumber string  Optional //idnumberdescription string  Optional //descriptiondescriptionformat int  Default to \"1\" //description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)visible int  Optional //visiblescaleid int  Optional //scaleidscaleconfiguration string  Optional //scaleconfigurationcontextid int  Optional //The context idcontextlevel string  Optional //The context levelinstanceid int  Optional //The Instance idtaxonomies string  Optional //taxonomiesid int   //idtimecreated int  Optional //timecreatedtimemodified int  Optional //timemodifiedusermodified int  Optional //usermodified}"
                        }
                    ],
                    "response": "General structure\nint   //True if the update was successful",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_update_course_competency_settings",
                    "description": "Update the course competency settings",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "courseid",
                            "structure": "int   //Course id for the course to update"
                        },
                        {
                            "title": "settings",
                            "structure": "object {pushratingstouserplans int   //New value of the setting}"
                        }
                    ],
                    "response": "General structure\nint   //True if the update was successful.",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_update_plan",
                    "description": "Updates a learning plan.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "plan",
                            "structure": "object {name string  Optional //namedescription string  Optional //descriptiondescriptionformat int  Default to \"1\" //description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)userid int  Optional //useridtemplateid int  Optional //templateidorigtemplateid int  Optional //origtemplateidstatus int  Optional //statusduedate int  Optional //duedatereviewerid int  Optional //revieweridid int   //idtimecreated int  Optional //timecreatedtimemodified int  Optional //timemodifiedusermodified int  Optional //usermodified}"
                        }
                    ],
                    "response": "type reponse = {\n    name: string\n    description: string\n    descriptionformat: number\n    userid: number\n    templateid: number\n    origtemplateid: number\n    status: number\n    duedate: number\n    reviewerid: number\n    id: number\n    timecreated: number\n    timemodified: number\n    usermodified: number\n    statusname: string\n    isbasedontemplate: number\n    canmanage: number\n    canrequestreview: number\n    canreview: number\n    canbeedited: number\n    isactive: number\n    isdraft: number\n    iscompleted: number\n    isinreview: number\n    iswaitingforreview: number\n    isreopenallowed: number\n    iscompleteallowed: number\n    isunlinkallowed: number\n    isrequestreviewallowed: number\n    iscancelreviewrequestallowed: number\n    isstartreviewallowed: number\n    isstopreviewallowed: number\n    isapproveallowed: number\n    isunapproveallowed: number\n    duedateformatted: string\n    commentarea: {\n        component: string\n        commentarea: string\n        itemid: number\n        courseid: number\n        contextid: number\n        cid: string\n        autostart: number\n        canpost: number\n        canview: number\n        count: number\n        collapsediconkey: string\n        displaytotalcount: number\n        displaycancel: number\n        fullwidth: number\n        linktext: string\n        notoggle: number\n        template: string\n        canpostorhascomments: number\n    }\n    reviewer: {\n        id: number\n        email: string\n        idnumber: string\n        phone1: string\n        phone2: string\n        department: string\n        institution: string\n        fullname: string\n        identity: string\n        profileurl: string\n        profileimageurl: string\n        profileimageurlsmall: string\n    }\n    template: {\n        shortname: string\n        description: string\n        descriptionformat: number\n        duedate: number\n        visible: number\n        contextid: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        duedateformatted: string\n        cohortscount: number\n        planscount: number\n        canmanage: number\n        canread: number\n        contextname: string\n        contextnamenoprefix: string\n    }\n    url: string\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_update_template",
                    "description": "Update a learning plan template.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "template",
                            "structure": "object {shortname string  Optional //shortnamedescription string  Optional //descriptiondescriptionformat int  Default to \"1\" //description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)duedate int  Optional //duedatevisible int  Optional //visiblecontextid int  Optional //The context idcontextlevel string  Optional //The context levelinstanceid int  Optional //The Instance idid int   //idtimecreated int  Optional //timecreatedtimemodified int  Optional //timemodifiedusermodified int  Optional //usermodified}"
                        }
                    ],
                    "response": "General structure\nint   //True if the update was successful",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "user": [
                {
                    "title": "core_competency_user_competency_cancel_review_request",
                    "description": "Cancel a review request.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int   //The user ID"
                        },
                        {
                            "title": "competencyid",
                            "structure": "int   //The competency ID"
                        }
                    ],
                    "response": "General structure\nint   //The success",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_user_competency_plan_viewed",
                    "description": "Log the user competency plan viewed event.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "competencyid",
                            "structure": "int   //The competency id"
                        },
                        {
                            "title": "userid",
                            "structure": "int   //The user id"
                        },
                        {
                            "title": "planid",
                            "structure": "int   //The plan id"
                        }
                    ],
                    "response": "General structure\nint   //True if the event user competency plan viewed was logged",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_user_competency_request_review",
                    "description": "Request a review.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int   //The user ID"
                        },
                        {
                            "title": "competencyid",
                            "structure": "int   //The competency ID"
                        }
                    ],
                    "response": "General structure\nint   //The success",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_user_competency_start_review",
                    "description": "Start a review.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int   //The user ID"
                        },
                        {
                            "title": "competencyid",
                            "structure": "int   //The competency ID"
                        }
                    ],
                    "response": "General structure\nint   //The success",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_user_competency_stop_review",
                    "description": "Stop a review.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int   //The user ID"
                        },
                        {
                            "title": "competencyid",
                            "structure": "int   //The competency ID"
                        }
                    ],
                    "response": "General structure\nint   //The success",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_user_competency_viewed",
                    "description": "Log the user competency viewed event.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "usercompetencyid",
                            "structure": "int   //The user competency id"
                        }
                    ],
                    "response": "General structure\nint   //True if the event user competency viewed was logged",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_user_competency_viewed_in_course",
                    "description": "Log the user competency viewed in course event",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "competencyid",
                            "structure": "int   //The competency id"
                        },
                        {
                            "title": "userid",
                            "structure": "int   //The user id"
                        },
                        {
                            "title": "courseid",
                            "structure": "int   //The course id"
                        }
                    ],
                    "response": "General structure\nint   //True if the event user competency viewed in course was logged",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_competency_user_competency_viewed_in_plan",
                    "description": "Log the user competency viewed in plan event.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "competencyid",
                            "structure": "int   //The competency id"
                        },
                        {
                            "title": "userid",
                            "structure": "int   //The user id"
                        },
                        {
                            "title": "planid",
                            "structure": "int   //The plan id"
                        }
                    ],
                    "response": "General structure\nint   //True if the event user competency viewed in plan was logged",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "course": {
            "check": [
                {
                    "title": "core_course_check_updates",
                    "description": "Check if there is updates affecting the user for the given course\n                        and contexts.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseid",
                            "structure": "int   //Course id to check"
                        },
                        {
                            "title": "tocheck",
                            "structure": "  //Instances to checklist of (object {contextlevel string   //The context level for the file location.                                                                            Only module supported right now.id int   //Context instance idsince int   //Check updates since this time stamp})"
                        },
                        {
                            "title": "filter",
                            "structure": " Default to \"Array\n(\n)\n\" //Check only for updates in these areaslist of (string   //Area name: configuration, fileareas, completion, ratings, comments,                                                    gradeitems, outcomes)"
                        }
                    ],
                    "response": "type reponse = {\n    instances: {\n        contextlevel: string\n        id: number\n        updates: {\n            name: string\n            timeupdated: number\n            itemids: {}[]\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "delete": [
                {
                    "title": "core_course_delete_categories",
                    "description": "Delete course categories",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "categories",
                            "structure": "list of ( object {id int   //category id to deletenewparent int  Optional //the parent category to move the contents to, if specifiedrecursive int  Default to \"0\" //1: recursively delete all contents inside this                            category, 0 (default): move contents to newparent or current parent category (except if parent is root)})"
                        }
                    ],
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_course_delete_courses",
                    "description": "Deletes all specified courses",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": "list of ( int   //course ID)"
                        }
                    ],
                    "response": "type reponse = {\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_course_delete_modules",
                    "description": "Deletes all specified module instances",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "cmids",
                            "structure": "  //Array of course module IDslist of (int   //course module ID)"
                        }
                    ],
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "edit": [
                {
                    "title": "core_course_edit_module",
                    "description": "Performs an action on course module (change visibility, duplicate,\n                        delete, etc.)",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "action",
                            "structure": "string   //action: hide, show, stealth, duplicate, delete, moveleft, moveright, group..."
                        },
                        {
                            "title": "id",
                            "structure": "int   //course module id"
                        },
                        {
                            "title": "sectionreturn",
                            "structure": "int  Default to \"null\" //section to return to"
                        }
                    ],
                    "response": "General structure\nstring   //html to replace the current module with",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_course_edit_section",
                    "description": "Performs an action on course section (change visibility, set\n                        marker, delete)",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "action",
                            "structure": "string   //action: hide, show, stealth, setmarker, removemarker"
                        },
                        {
                            "title": "id",
                            "structure": "int   //course section id"
                        },
                        {
                            "title": "sectionreturn",
                            "structure": "int  Default to \"null\" //section to return to"
                        }
                    ],
                    "response": "General structure\nstring   //Additional data for javascript (JSON-encoded string)",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "get": [
                {
                    "title": "core_course_get_activities_overview",
                    "description": "** DEPRECATED ** Please do not call this function any more. Return\n                        activities overview for the given courses.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": "list of ( int   //Course id.)"
                        }
                    ],
                    "response": "type reponse = {\n    courses: {\n        id: number\n        overviews: {\n            module: string\n            overviewtext: string\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_course_get_categories",
                    "description": "Return category details",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "criteria",
                            "structure": " Default to \"Array\n(\n)\n\" //criterialist of (object {key string   //The category column to search, expected keys (value format) are:\"id\" (int) the category id,\"ids\" (string) category ids separated by commas,\"name\" (string) the category name,\"parent\" (int) the parent category id,\"idnumber\" (string) category idnumber - user must have 'moodle/category:manage' to search on idnumber,\"visible\" (int) whether the returned categories must be visible or hidden. If the key is not passed,                                         then the function return all categories that the user can see. - user must have 'moodle/category:manage' or 'moodle/category:viewhiddencategories' to search on visible,\"theme\" (string) only return the categories having this theme - user must have 'moodle/category:manage' to search on themevalue string   //the value to match})"
                        },
                        {
                            "title": "addsubcategories",
                            "structure": "int  Default to \"1\" //return the sub categories infos                                      (1 - default) otherwise only the category info (0)"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    name: string\n    idnumber: string\n    description: string\n    descriptionformat: number\n    parent: number\n    sortorder: number\n    coursecount: number\n    visible: number\n    visibleold: number\n    timemodified: number\n    depth: number\n    path: string\n    theme: string\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_course_get_contents",
                    "description": "Get course contents",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseid",
                            "structure": "int   //course id"
                        },
                        {
                            "title": "options",
                            "structure": " Default to \"Array\n(\n)\n\" //Options, used since Moodle 2.9list of (object {name string   //The expected keys (value format) are:                                            excludemodules (bool) Do not return modules, return only the sections structure                                            excludecontents (bool) Do not return module contents (i.e: files inside a resource)                                            includestealthmodules (bool) Return stealth modules for students in a special                                                section (with id -1)                                            sectionid (int) Return only this section                                            sectionnumber (int) Return only this section with number (order)                                            cmid (int) Return only this module information (among the whole sections structure)                                            modname (string) Return only modules with this name \"label, forum, etc...\"                                            modid (int) Return only the module with this id (to be used with modnamevalue string   //the value of the option,                                                                this param is personaly validated in the external function.})"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    name: string\n    visible: number\n    summary: string\n    summaryformat: number\n    section: number\n    hiddenbynumsections: number\n    uservisible: number\n    availabilityinfo: string\n    modules: {\n        id: number\n        url: string\n        name: string\n        instance: number\n        description: string\n        visible: number\n        uservisible: number\n        availabilityinfo: string\n        visibleoncoursepage: number\n        modicon: string\n        modname: string\n        modplural: string\n        availability: string\n        indent: number\n        contents: {\n            type: string\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            content: string\n            timecreated: number\n            timemodified: number\n            sortorder: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n            userid: number\n            author: string\n            license: string\n        }[]\n    }[]\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_course_get_course_module",
                    "description": "Return information about a course module",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "cmid",
                            "structure": "int   //The course module id"
                        }
                    ],
                    "response": "type reponse = {\n    cm: {\n        id: number\n        course: number\n        module: number\n        name: string\n        modname: string\n        instance: number\n        section: number\n        sectionnum: number\n        groupmode: number\n        groupingid: number\n        completion: number\n        idnumber: string\n        added: number\n        score: number\n        indent: number\n        visible: number\n        visibleoncoursepage: number\n        visibleold: number\n        completiongradeitemnumber: number\n        completionview: number\n        completionexpected: number\n        showdescription: number\n        availability: string\n        grade: double\n        scale: string\n        gradepass: string\n        gradecat: number\n        advancedgrading: {\n            area: string\n            method: string\n        }[]\n        outcomes: {\n            id: string\n            name: string\n            scale: string\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_course_get_course_module_by_instance",
                    "description": "Return information about a given module name and instance id",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "module",
                            "structure": "string   //The module name"
                        },
                        {
                            "title": "instance",
                            "structure": "int   //The module instance id"
                        }
                    ],
                    "response": "type reponse = {\n    cm: {\n        id: number\n        course: number\n        module: number\n        name: string\n        modname: string\n        instance: number\n        section: number\n        sectionnum: number\n        groupmode: number\n        groupingid: number\n        completion: number\n        idnumber: string\n        added: number\n        score: number\n        indent: number\n        visible: number\n        visibleoncoursepage: number\n        visibleold: number\n        completiongradeitemnumber: number\n        completionview: number\n        completionexpected: number\n        showdescription: number\n        availability: string\n        grade: double\n        scale: string\n        gradepass: string\n        gradecat: number\n        advancedgrading: {\n            area: string\n            method: string\n        }[]\n        outcomes: {\n            id: string\n            name: string\n            scale: string\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_course_get_courses",
                    "description": "Return course details",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "options",
                            "structure": " Default to \"Array\n(\n)\n\" //options - operator OR is usedobject {ids  Optional //List of course id. If empty return all courses                                        except front page course.list of (int   //Course id)}"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    shortname: string\n    categoryid: number\n    categorysortorder: number\n    fullname: string\n    displayname: string\n    idnumber: string\n    summary: string\n    summaryformat: number\n    format: string\n    showgrades: number\n    newsitems: number\n    startdate: number\n    enddate: number\n    numsections: number\n    maxbytes: number\n    showreports: number\n    visible: number\n    hiddensections: number\n    groupmode: number\n    groupmodeforce: number\n    defaultgroupingid: number\n    timecreated: number\n    timemodified: number\n    enablecompletion: number\n    completionnotify: number\n    lang: string\n    forcetheme: string\n    courseformatoptions: {\n        name: string\n        value: string\n    }[]\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_course_get_courses_by_field",
                    "description": "Get courses matching a specific field (id/s, shortname, idnumber,\n                        category)",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "field",
                            "structure": "string  Default to \"\" //The field to search can be left empty for all courses or:                id: course id                ids: comma separated course ids                shortname: course short name                idnumber: course id number                category: category id the course belongs to            "
                        },
                        {
                            "title": "value",
                            "structure": "string  Default to \"\" //The value to match"
                        }
                    ],
                    "response": "type reponse = {\n    courses: {\n        id: number\n        fullname: string\n        displayname: string\n        shortname: string\n        categoryid: number\n        categoryname: string\n        sortorder: number\n        summary: string\n        summaryformat: number\n        summaryfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        overviewfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        contacts: {\n            id: number\n            fullname: string\n        }[]\n        enrollmentmethods: {}[]\n        idnumber: string\n        format: string\n        showgrades: number\n        newsitems: number\n        startdate: number\n        enddate: number\n        maxbytes: number\n        showreports: number\n        visible: number\n        groupmode: number\n        groupmodeforce: number\n        defaultgroupingid: number\n        enablecompletion: number\n        completionnotify: number\n        lang: string\n        theme: string\n        marker: number\n        legacyfiles: number\n        calendartype: string\n        timecreated: number\n        timemodified: number\n        requested: number\n        cacherev: number\n        filters: {\n            filter: string\n            localstate: number\n            inheritedstate: number\n        }[]\n        courseformatoptions: {\n            name: string\n            value: string\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_course_get_module",
                    "description": "Returns html with one activity module on course page",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //course module id"
                        },
                        {
                            "title": "sectionreturn",
                            "structure": "int  Default to \"null\" //section to return to"
                        }
                    ],
                    "response": "General structure\nstring   //html to replace the current module with",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_course_get_updates_since",
                    "description": "Check if there are updates affecting the user for the given course\n                        since the given time stamp.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "courseid",
                            "structure": "int   //Course id to check"
                        },
                        {
                            "title": "since",
                            "structure": "int   //Check updates since this time stamp"
                        },
                        {
                            "title": "filter",
                            "structure": " Default to \"Array\n(\n)\n\" //Check only for updates in these areaslist of (string   //Area name: configuration, fileareas, completion, ratings, comments,                                                    gradeitems, outcomes)"
                        }
                    ],
                    "response": "type reponse = {\n    instances: {\n        contextlevel: string\n        id: number\n        updates: {\n            name: string\n            timeupdated: number\n            itemids: {}[]\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_course_get_user_administration_options",
                    "description": "Return a list of administration options in a set of courses that\n                        are avaialable or not for the current user.\n                    ",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": "list of ( int   //Course id.)"
                        }
                    ],
                    "response": "type reponse = {\n    courses: {\n        id: number\n        options: {\n            name: string\n            available: number\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_course_get_user_navigation_options",
                    "description": "Return a list of navigation options in a set of courses that are\n                        avaialable or not for the current user.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": "list of ( int   //Course id.)"
                        }
                    ],
                    "response": "type reponse = {\n    courses: {\n        id: number\n        options: {\n            name: string\n            available: number\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "enrol": {
            "edit": [
                {
                    "title": "core_enrol_edit_user_enrolment",
                    "description": "External function that updates a given user enrolment",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseid",
                            "structure": "int   //User enrolment ID"
                        },
                        {
                            "title": "ueid",
                            "structure": "int   //User enrolment ID"
                        },
                        {
                            "title": "status",
                            "structure": "int   //Enrolment status"
                        },
                        {
                            "title": "timestart",
                            "structure": "int  Default to \"0\" //Enrolment start timestamp"
                        },
                        {
                            "title": "timeend",
                            "structure": "int  Default to \"0\" //Enrolment end timestamp"
                        }
                    ],
                    "response": "type reponse = {\n    result: number\n    errors: {\n        key: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "get": [
                {
                    "title": "core_enrol_get_enrolled_users",
                    "description": "Get enrolled users by course id.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseid",
                            "structure": "int   //course id"
                        },
                        {
                            "title": "options",
                            "structure": " Default to \"Array\n(\n)\n\" //Option names:                        * withcapability (string) return only users with this capability. This option requires 'moodle/role:review' on the course context.                        * groupid (integer) return only users in this group id. If the course has groups enabled and this param                                            isn't defined, returns all the viewable users.                                            This option requires 'moodle/site:accessallgroups' on the course context if the                                            user doesn't belong to the group.                        * onlyactive (integer) return only users with active enrolments and matching time restrictions. This option requires 'moodle/course:enrolreview' on the course context.                        * userfields ('string, string, ...') return only the values of these user fields.                        * limitfrom (integer) sql limit from.                        * limitnumber (integer) maximum number of returned users.                        * sortby (string) sort by id, firstname or lastname. For ordering like the site does, use siteorder.                        * sortdirection (string) ASC or DESClist of (object {name string   //option namevalue string   //option value})"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    username: string\n    firstname: string\n    lastname: string\n    fullname: string\n    email: string\n    address: string\n    phone1: string\n    phone2: string\n    icq: string\n    skype: string\n    yahoo: string\n    aim: string\n    msn: string\n    department: string\n    institution: string\n    idnumber: string\n    interests: string\n    firstaccess: number\n    lastaccess: number\n    description: string\n    descriptionformat: number\n    city: string\n    url: string\n    country: string\n    profileimageurlsmall: string\n    profileimageurl: string\n    customfields: {\n        type: string\n        value: string\n        name: string\n        shortname: string\n    }[]\n    groups: {\n        id: number\n        name: string\n        description: string\n        descriptionformat: number\n    }[]\n    roles: {\n        roleid: number\n        name: string\n        shortname: string\n        sortorder: number\n    }[]\n    preferences: {\n        name: string\n        value: string\n    }[]\n    enrolledcourses: {\n        id: number\n        fullname: string\n        shortname: string\n    }[]\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_enrol_get_enrolled_users_with_capability",
                    "description": "For each course and capability specified, return a list of the\n                        users that are enrolled in the course and have that capability",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "coursecapabilities",
                            "structure": "  //course id and associated capability namelist of (object {courseid int   //Course ID number in the Moodle course tablecapabilities list of (string   //Capability name, such as mod/forum:viewdiscussion)})"
                        },
                        {
                            "title": "options",
                            "structure": " Default to \"Array\n(\n)\n\" //Option names:                        * groupid (integer) return only users in this group id. Requires 'moodle/site:accessallgroups' .                        * onlyactive (integer) only users with active enrolments. Requires 'moodle/course:enrolreview' .                        * userfields ('string, string, ...') return only the values of these user fields.                        * limitfrom (integer) sql limit from.                        * limitnumber (integer) max number of users per course and capability.list of (object {name string   //option namevalue string   //option value})"
                        }
                    ],
                    "response": "type reponse = {\n    courseid: number\n    capability: string\n    users: {\n        id: number\n        username: string\n        firstname: string\n        lastname: string\n        fullname: string\n        email: string\n        address: string\n        phone1: string\n        phone2: string\n        icq: string\n        skype: string\n        yahoo: string\n        aim: string\n        msn: string\n        department: string\n        institution: string\n        interests: string\n        firstaccess: number\n        lastaccess: number\n        description: string\n        descriptionformat: number\n        city: string\n        url: string\n        country: string\n        profileimageurlsmall: string\n        profileimageurl: string\n        customfields: {\n            type: string\n            value: string\n            name: string\n            shortname: string\n        }[]\n        groups: {\n            id: number\n            name: string\n            description: string\n        }[]\n        roles: {\n            roleid: number\n            name: string\n            shortname: string\n            sortorder: number\n        }[]\n        preferences: {\n            name: string\n            value: string\n        }[]\n        enrolledcourses: {\n            id: number\n            fullname: string\n            shortname: string\n        }[]\n    }[]\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_enrol_get_potential_users",
                    "description": "Get the list of potential users to enrol",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseid",
                            "structure": "int   //course id"
                        },
                        {
                            "title": "enrolid",
                            "structure": "int   //enrolment id"
                        },
                        {
                            "title": "search",
                            "structure": "string   //query"
                        },
                        {
                            "title": "searchanywhere",
                            "structure": "int   //find a match anywhere, or only at the beginning"
                        },
                        {
                            "title": "page",
                            "structure": "int   //Page number"
                        },
                        {
                            "title": "perpage",
                            "structure": "int   //Number per page"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    username: string\n    firstname: string\n    lastname: string\n    fullname: string\n    email: string\n    address: string\n    phone1: string\n    phone2: string\n    icq: string\n    skype: string\n    yahoo: string\n    aim: string\n    msn: string\n    department: string\n    institution: string\n    idnumber: string\n    interests: string\n    firstaccess: number\n    lastaccess: number\n    auth: string\n    suspended: number\n    confirmed: number\n    lang: string\n    calendartype: string\n    theme: string\n    timezone: string\n    mailformat: number\n    description: string\n    descriptionformat: number\n    city: string\n    url: string\n    country: string\n    profileimageurlsmall: string\n    profileimageurl: string\n    customfields: {\n        type: string\n        value: string\n        name: string\n        shortname: string\n    }[]\n    preferences: {\n        name: string\n        value: string\n    }[]\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_enrol_get_users_courses",
                    "description": "Get the list of courses where a user is enrolled in",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int   //user id"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    shortname: string\n    fullname: string\n    enrolledusercount: number\n    idnumber: string\n    visible: number\n    summary: string\n    summaryformat: number\n    format: string\n    showgrades: number\n    lang: string\n    enablecompletion: number\n    category: number\n    progress: double\n    startdate: number\n    enddate: number\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "form": {
            "get": [
                {
                    "title": "core_form_get_filetypes_browser_data",
                    "description": "Provides data for the filetypes element browser.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "onlytypes",
                            "structure": "string  Default to \"\" //Limit the browser to the given groups and extensions"
                        },
                        {
                            "title": "allowall",
                            "structure": "int  Default to \"1\" //Allows to select All file types, does not apply with onlytypes are set."
                        },
                        {
                            "title": "current",
                            "structure": "string  Default to \"\" //Current types that should be selected."
                        }
                    ],
                    "response": "type reponse = {\n    groups: {\n        key: string\n        name: string\n        selectable: number\n        selected: number\n        ext: string\n        expanded: number\n        types: {\n            key: string\n            name: string\n            selected: number\n            ext: string\n        }[]\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "get": {
            "component": [
                {
                    "title": "core_get_component_strings",
                    "description": "Return all raw strings (with {$a->xxx}), for a specific\n                        component - similar to core get_component_strings(), call",
                    "ajax": true,
                    "login": false,
                    "args": [
                        {
                            "title": "component",
                            "structure": "string   //component"
                        },
                        {
                            "title": "lang",
                            "structure": "string  Default to \"null\" //lang"
                        }
                    ],
                    "response": "type reponse = {\n    stringid: string\n    string: string\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "strings": [
                {
                    "title": "core_get_strings",
                    "description": "Return some translated strings - like several core get_string(),\n                        calls",
                    "ajax": true,
                    "login": false,
                    "args": [
                        {
                            "title": "strings",
                            "structure": "list of ( object {stringid string   //string identifiercomponent string  Default to \"moodle\" //componentlang string  Default to \"null\" //langstringparams  Default to \"Array\n(\n)\n\" //the definition of a string param (i.e. {$a->name})list of (object {name string  Optional //param name                                - if the string expect only one $a parameter then don't send this field, just send the value.value string   //param value})})"
                        }
                    ],
                    "response": "type reponse = {\n    stringid: string\n    component: string\n    lang: string\n    string: string\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "grading": {
            "get": [
                {
                    "title": "core_grading_get_definitions",
                    "description": "Get grading definitions",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "cmids",
                            "structure": "  //1 or more course module idslist of (int   //course module id)"
                        },
                        {
                            "title": "areaname",
                            "structure": "string   //area name"
                        },
                        {
                            "title": "activeonly",
                            "structure": "int  Default to \"0\" //Only the active method"
                        }
                    ],
                    "response": "type reponse = {\n    areas: {\n        cmid: number\n        contextid: number\n        component: string\n        areaname: string\n        activemethod: string\n        definitions: {\n            id: number\n            method: string\n            name: string\n            description: string\n            descriptionformat: number\n            status: number\n            copiedfromid: number\n            timecreated: number\n            usercreated: number\n            timemodified: number\n            usermodified: number\n            timecopied: number\n            guide: {\n                guide_criteria: {\n                    id: number\n                    sortorder: number\n                    description: string\n                    descriptionformat: number\n                    shortname: string\n                    descriptionmarkers: string\n                    descriptionmarkersformat: number\n                    maxscore: double\n                }[]\n                guide_comments: {\n                    id: number\n                    sortorder: number\n                    description: string\n                    descriptionformat: number\n                }[]\n            }\n            rubric: {\n                rubric_criteria: {\n                    id: number\n                    sortorder: number\n                    description: string\n                    descriptionformat: number\n                    levels: {\n                        id: number\n                        score: double\n                        definition: string\n                        definitionformat: number\n                    }[]\n                }[]\n            }\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_grading_get_gradingform_instances",
                    "description": "Get grading form instances",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "definitionid",
                            "structure": "int   //definition id"
                        },
                        {
                            "title": "since",
                            "structure": "int  Default to \"0\" //submitted since"
                        }
                    ],
                    "response": "type reponse = {\n    instances: {\n        id: number\n        raterid: number\n        itemid: number\n        rawgrade: string\n        status: number\n        feedback: string\n        feedbackformat: number\n        timemodified: number\n        guide: {\n            criteria: {\n                id: number\n                criterionid: number\n                levelid: number\n                remark: string\n                remarkformat: number\n                score: double\n            }[]\n        }\n        rubric: {\n            criteria: {\n                id: number\n                criterionid: number\n                levelid: number\n                remark: string\n                remarkformat: number\n            }[]\n        }\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "group": {
            "add": [
                {
                    "title": "core_group_add_group_members",
                    "description": "Adds group members.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "members",
                            "structure": "list of ( object {groupid int   //group record iduserid int   //user id})"
                        }
                    ],
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "create": [
                {
                    "title": "core_group_create_groupings",
                    "description": "Creates new groupings",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "groupings",
                            "structure": "  //List of grouping object. A grouping has a courseid, a name and a description.list of (object {courseid int   //id of coursename string   //multilang compatible name, course uniquedescription string   //grouping description textdescriptionformat int  Default to \"1\" //description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)idnumber string  Optional //id number})"
                        }
                    ],
                    "response": "General structure\n  //List of grouping object. A grouping has an id, a courseid, a name and a description.list of (object {id int   //grouping record idcourseid int   //id of coursename string   //multilang compatible name, course uniquedescription string   //grouping description textdescriptionformat int   //description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)idnumber string   //id number})",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_group_create_groups",
                    "description": "Creates new groups.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "groups",
                            "structure": "  //List of group object. A group has a courseid, a name, a description and an enrolment key.list of (object {courseid int   //id of coursename string   //multilang compatible name, course uniquedescription string   //group description textdescriptionformat int  Default to \"1\" //description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)enrolmentkey string  Optional //group enrol secret phraseidnumber string  Optional //id number})"
                        }
                    ],
                    "response": "General structure\n  //List of group object. A group has an id, a courseid, a name, a description and an enrolment key.list of (object {id int   //group record idcourseid int   //id of coursename string   //multilang compatible name, course uniquedescription string   //group description textdescriptionformat int   //description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)enrolmentkey string   //group enrol secret phraseidnumber string   //id number})",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "get": [
                {
                    "title": "core_group_get_activity_allowed_groups",
                    "description": "Gets a list of groups that the user is allowed to access within the\n                        specified activity.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "cmid",
                            "structure": "int   //course module id"
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //id of user, empty for current user"
                        }
                    ],
                    "response": "type reponse = {\n    groups: {\n        id: number\n        name: string\n        description: string\n        descriptionformat: number\n        idnumber: string\n        courseid: number\n    }[]\n    canaccessallgroups: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_group_get_activity_groupmode",
                    "description": "Returns effective groupmode used in a given activity.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "cmid",
                            "structure": "int   //course module id"
                        }
                    ],
                    "response": "type reponse = {\n    groupmode: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_group_get_course_groupings",
                    "description": "Returns all groupings in specified course.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseid",
                            "structure": "int   //id of course"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    courseid: number\n    name: string\n    description: string\n    descriptionformat: number\n    idnumber: string\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_group_get_course_groups",
                    "description": "Returns all groups in specified course.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseid",
                            "structure": "int   //id of course"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    courseid: number\n    name: string\n    description: string\n    descriptionformat: number\n    enrolmentkey: string\n    idnumber: string\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_group_get_course_user_groups",
                    "description": "Returns all groups in specified course for the specified user.\n                    ",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "courseid",
                            "structure": "int   //id of course"
                        },
                        {
                            "title": "userid",
                            "structure": "int   //id of user"
                        },
                        {
                            "title": "groupingid",
                            "structure": "int  Default to \"0\" //returns only groups in the specified grouping"
                        }
                    ],
                    "response": "type reponse = {\n    groups: {\n        id: number\n        name: string\n        description: string\n        descriptionformat: number\n        idnumber: string\n        courseid: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_group_get_group_members",
                    "description": "Returns group members.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "groupids",
                            "structure": "list of ( int   //Group ID)"
                        }
                    ],
                    "response": "type reponse = {\n    groupid: number\n    userids: {}[]\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_group_get_groupings",
                    "description": "Returns groupings details.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "groupingids",
                            "structure": "  //List of grouping id. A grouping id is an integer.list of (int   //grouping ID)"
                        },
                        {
                            "title": "returngroups",
                            "structure": "int  Default to \"0\" //return associated groups"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    courseid: number\n    name: string\n    description: string\n    descriptionformat: number\n    idnumber: string\n    groups: {\n        id: number\n        courseid: number\n        name: string\n        description: string\n        descriptionformat: number\n        enrolmentkey: string\n        idnumber: string\n    }[]\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_group_get_groups",
                    "description": "Returns group details.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "groupids",
                            "structure": "  //List of group id. A group id is an integer.list of (int   //Group ID)"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    courseid: number\n    name: string\n    description: string\n    descriptionformat: number\n    enrolmentkey: string\n    idnumber: string\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "message": {
            "block": [
                {
                    "title": "core_message_block_contacts",
                    "description": "Block contacts",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "userids",
                            "structure": "  //List of user IDslist of (int   //User ID)"
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //The id of the user we are blocking the contacts for, 0 for the                current user"
                        }
                    ],
                    "response": "General structure\n Optional //list of warningslist of (  //warningobject {item string  Optional //itemitemid int  Optional //item idwarningcode string   //the warning code can be used by the client app to implement specific behaviourmessage string   //untranslated english message to explain the warning})",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "data": [
                {
                    "title": "core_message_data_for_messagearea_contacts",
                    "description": "Retrieve the template data for the contact list",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int   //The id of the user who we are viewing conversations for"
                        },
                        {
                            "title": "limitfrom",
                            "structure": "int  Default to \"0\" //Limit from"
                        },
                        {
                            "title": "limitnum",
                            "structure": "int  Default to \"0\" //Limit number"
                        }
                    ],
                    "response": "type reponse = {\n    contacts: {\n        userid: number\n        fullname: string\n        profileimageurl: string\n        profileimageurlsmall: string\n        ismessaging: number\n        sentfromcurrentuser: number\n        lastmessage: string\n        messageid: number\n        showonlinestatus: number\n        isonline: number\n        isread: number\n        isblocked: number\n        unreadcount: number\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_message_data_for_messagearea_conversations",
                    "description": "Retrieve the template data for the conversation list",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int   //The id of the user who we are viewing conversations for"
                        },
                        {
                            "title": "limitfrom",
                            "structure": "int  Default to \"0\" //Limit from"
                        },
                        {
                            "title": "limitnum",
                            "structure": "int  Default to \"0\" //Limit number"
                        }
                    ],
                    "response": "type reponse = {\n    contacts: {\n        userid: number\n        fullname: string\n        profileimageurl: string\n        profileimageurlsmall: string\n        ismessaging: number\n        sentfromcurrentuser: number\n        lastmessage: string\n        messageid: number\n        showonlinestatus: number\n        isonline: number\n        isread: number\n        isblocked: number\n        unreadcount: number\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_message_data_for_messagearea_get_most_recent_message",
                    "description": "Retrieve the template data for the most recent message",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "currentuserid",
                            "structure": "int   //The current user's id"
                        },
                        {
                            "title": "otheruserid",
                            "structure": "int   //The other user's id"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    useridfrom: number\n    useridto: number\n    text: string\n    displayblocktime: number\n    blocktime: string\n    position: string\n    timesent: string\n    timecreated: number\n    isread: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_message_data_for_messagearea_get_profile",
                    "description": "Retrieve the template data for the users's profile",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "currentuserid",
                            "structure": "int   //The current user's id"
                        },
                        {
                            "title": "otheruserid",
                            "structure": "int   //The id of the user whose profile we want to view"
                        }
                    ],
                    "response": "type reponse = {\n    userid: number\n    email: string\n    country: string\n    city: string\n    fullname: string\n    profileimageurl: string\n    profileimageurlsmall: string\n    showonlinestatus: number\n    isonline: number\n    isblocked: number\n    iscontact: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_message_data_for_messagearea_messages",
                    "description": "Retrieve the template data for the messages",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "currentuserid",
                            "structure": "int   //The current user's id"
                        },
                        {
                            "title": "otheruserid",
                            "structure": "int   //The other user's id"
                        },
                        {
                            "title": "limitfrom",
                            "structure": "int  Default to \"0\" //Limit from"
                        },
                        {
                            "title": "limitnum",
                            "structure": "int  Default to \"0\" //Limit number"
                        },
                        {
                            "title": "newest",
                            "structure": "int  Default to \"\" //Newest first?"
                        },
                        {
                            "title": "timefrom",
                            "structure": "int  Default to \"0\" //The timestamp from which the messages were created"
                        }
                    ],
                    "response": "type reponse = {\n    iscurrentuser: number\n    currentuserid: number\n    otheruserid: number\n    otheruserfullname: string\n    showonlinestatus: number\n    isonline: number\n    messages: {\n        id: number\n        useridfrom: number\n        useridto: number\n        text: string\n        displayblocktime: number\n        blocktime: string\n        position: string\n        timesent: string\n        timecreated: number\n        isread: number\n    }[]\n    isblocked: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_message_data_for_messagearea_search_messages",
                    "description": "Retrieve the template data for searching for messages",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int   //The id of the user who is performing the search"
                        },
                        {
                            "title": "search",
                            "structure": "string   //The string being searched"
                        },
                        {
                            "title": "limitfrom",
                            "structure": "int  Default to \"0\" //Limit from"
                        },
                        {
                            "title": "limitnum",
                            "structure": "int  Default to \"0\" //Limit number"
                        }
                    ],
                    "response": "type reponse = {\n    contacts: {\n        userid: number\n        fullname: string\n        profileimageurl: string\n        profileimageurlsmall: string\n        ismessaging: number\n        sentfromcurrentuser: number\n        lastmessage: string\n        messageid: number\n        showonlinestatus: number\n        isonline: number\n        isread: number\n        isblocked: number\n        unreadcount: number\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_message_data_for_messagearea_search_users",
                    "description": "Retrieve the template data for searching for people",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int   //The id of the user who is performing the search"
                        },
                        {
                            "title": "search",
                            "structure": "string   //The string being searched"
                        },
                        {
                            "title": "limitnum",
                            "structure": "int  Default to \"0\" //Limit number"
                        }
                    ],
                    "response": "type reponse = {\n    contacts: {\n        userid: number\n        fullname: string\n        profileimageurl: string\n        profileimageurlsmall: string\n        ismessaging: number\n        sentfromcurrentuser: number\n        lastmessage: string\n        messageid: number\n        showonlinestatus: number\n        isonline: number\n        isread: number\n        isblocked: number\n        unreadcount: number\n    }[]\n    courses: {\n        id: number\n        shortname: string\n        fullname: string\n    }[]\n    noncontacts: {\n        userid: number\n        fullname: string\n        profileimageurl: string\n        profileimageurlsmall: string\n        ismessaging: number\n        sentfromcurrentuser: number\n        lastmessage: string\n        messageid: number\n        showonlinestatus: number\n        isonline: number\n        isread: number\n        isblocked: number\n        unreadcount: number\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_message_data_for_messagearea_search_users_in_course",
                    "description": "Retrieve the template data for searching for people in a course\n                    ",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int   //The id of the user who is performing the search"
                        },
                        {
                            "title": "courseid",
                            "structure": "int   //The id of the course"
                        },
                        {
                            "title": "search",
                            "structure": "string   //The string being searched"
                        },
                        {
                            "title": "limitfrom",
                            "structure": "int  Default to \"0\" //Limit from"
                        },
                        {
                            "title": "limitnum",
                            "structure": "int  Default to \"0\" //Limit number"
                        }
                    ],
                    "response": "type reponse = {\n    contacts: {\n        userid: number\n        fullname: string\n        profileimageurl: string\n        profileimageurlsmall: string\n        ismessaging: number\n        sentfromcurrentuser: number\n        lastmessage: string\n        messageid: number\n        showonlinestatus: number\n        isonline: number\n        isread: number\n        isblocked: number\n        unreadcount: number\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "get": [
                {
                    "title": "core_message_get_blocked_users",
                    "description": "Retrieve a list of users blocked",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int   //the user whose blocked users we want to retrieve"
                        }
                    ],
                    "response": "type reponse = {\n    users: {\n        id: number\n        fullname: string\n        profileimageurl: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_message_get_contacts",
                    "description": "Retrieve the contact list",
                    "ajax": false,
                    "login": true,
                    "args": [],
                    "response": "type reponse = {\n    online: {\n        id: number\n        fullname: string\n        profileimageurl: string\n        profileimageurlsmall: string\n        unread: number\n    }[]\n    offline: {\n        id: number\n        fullname: string\n        profileimageurl: string\n        profileimageurlsmall: string\n        unread: number\n    }[]\n    strangers: {\n        id: number\n        fullname: string\n        profileimageurl: string\n        profileimageurlsmall: string\n        unread: number\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_message_get_message_processor",
                    "description": "Get a message processor",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int   //id of the user, 0 for current user"
                        },
                        {
                            "title": "name",
                            "structure": "string   //The name of the message processor"
                        }
                    ],
                    "response": "type reponse = {\n    systemconfigured: number\n    userconfigured: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_message_get_messages",
                    "description": "Retrieve a list of messages sent and received by a user\n                        (conversations, notifications or both)",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "useridto",
                            "structure": "int   //the user id who received the message, 0 for any user"
                        },
                        {
                            "title": "useridfrom",
                            "structure": "int  Default to \"0\" //the user id who send the message, 0 for any user. -10 or -20 for no-reply or support user"
                        },
                        {
                            "title": "type",
                            "structure": "string  Default to \"both\" //type of message to return, expected values are: notifications, conversations and both"
                        },
                        {
                            "title": "read",
                            "structure": "int  Default to \"1\" //true for getting read messages, false for unread"
                        },
                        {
                            "title": "newestfirst",
                            "structure": "int  Default to \"1\" //true for ordering by newest first, false for oldest first"
                        },
                        {
                            "title": "limitfrom",
                            "structure": "int  Default to \"0\" //limit from"
                        },
                        {
                            "title": "limitnum",
                            "structure": "int  Default to \"0\" //limit number"
                        }
                    ],
                    "response": "type reponse = {\n    messages: {\n        id: number\n        useridfrom: number\n        useridto: number\n        subject: string\n        text: string\n        fullmessage: string\n        fullmessageformat: number\n        fullmessagehtml: string\n        smallmessage: string\n        notification: number\n        contexturl: string\n        contexturlname: string\n        timecreated: number\n        timeread: number\n        usertofullname: string\n        userfromfullname: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_message_get_unread_conversations_count",
                    "description": "Retrieve the count of unread conversations for a given user",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "useridto",
                            "structure": "int   //the user id who received the message, 0 for any user"
                        }
                    ],
                    "response": "General structure\nint   //The count of unread messages for the user",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_message_get_user_message_preferences",
                    "description": "Get the message preferences for a given user.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //id of the user, 0 for current user"
                        }
                    ],
                    "response": "type reponse = {\n    preferences: {\n        userid: number\n        disableall: number\n        processors: {\n            displayname: string\n            name: string\n            hassettings: number\n            contextid: number\n            userconfigured: number\n        }[]\n        components: {\n            displayname: string\n            notifications: {\n                displayname: string\n                preferencekey: string\n                processors: {\n                    displayname: string\n                    name: string\n                    locked: number\n                    userconfigured: number\n                    loggedin: {\n                        name: string\n                        displayname: string\n                        checked: number\n                    }\n                    loggedoff: {\n                        name: string\n                        displayname: string\n                        checked: number\n                    }\n                }[]\n            }[]\n        }[]\n    }\n    blocknoncontacts: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_message_get_user_notification_preferences",
                    "description": "Get the notification preferences for a given user.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //id of the user, 0 for current user"
                        }
                    ],
                    "response": "type reponse = {\n    preferences: {\n        userid: number\n        disableall: number\n        processors: {\n            displayname: string\n            name: string\n            hassettings: number\n            contextid: number\n            userconfigured: number\n        }[]\n        components: {\n            displayname: string\n            notifications: {\n                displayname: string\n                preferencekey: string\n                processors: {\n                    displayname: string\n                    name: string\n                    locked: number\n                    userconfigured: number\n                    loggedin: {\n                        name: string\n                        displayname: string\n                        checked: number\n                    }\n                    loggedoff: {\n                        name: string\n                        displayname: string\n                        checked: number\n                    }\n                }[]\n            }[]\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "mark": [
                {
                    "title": "core_message_mark_all_messages_as_read",
                    "description": "Mark all messages as read for a given user",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "useridto",
                            "structure": "int   //the user id who received the message, 0 for any user"
                        },
                        {
                            "title": "useridfrom",
                            "structure": "int  Default to \"0\" //the user id who send the message, 0 for any user. -10 or -20 for no-reply or support user"
                        }
                    ],
                    "response": "General structure\nint   //True if the messages were marked read, false otherwise",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_message_mark_all_notifications_as_read",
                    "description": "Mark all notifications as read for a given user",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "useridto",
                            "structure": "int   //the user id who received the message, 0 for any user"
                        },
                        {
                            "title": "useridfrom",
                            "structure": "int  Default to \"0\" //the user id who send the message, 0 for any user. -10 or -20 for no-reply or support user"
                        }
                    ],
                    "response": "General structure\nint   //True if the messages were marked read, false otherwise",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_message_mark_message_read",
                    "description": "Mark a single message as read, trigger message_viewed event.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "messageid",
                            "structure": "int   //id of the message in the messages table"
                        },
                        {
                            "title": "timeread",
                            "structure": "int  Default to \"0\" //timestamp for when the message should be marked read"
                        }
                    ],
                    "response": "type reponse = {\n    messageid: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_message_mark_notification_read",
                    "description": "Mark a single notification as read, trigger notification_viewed\n                        event.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "notificationid",
                            "structure": "int   //id of the notification"
                        },
                        {
                            "title": "timeread",
                            "structure": "int  Default to \"0\" //timestamp for when the notification should be marked read"
                        }
                    ],
                    "response": "type reponse = {\n    notificationid: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "question": {
            "get": [
                {
                    "title": "core_question_get_random_question_summaries",
                    "description": "Get the random question set for a criteria",
                    "ajax": true,
                    "login": false,
                    "args": [
                        {
                            "title": "categoryid",
                            "structure": "int   //Category id to find random questions"
                        },
                        {
                            "title": "includesubcategories",
                            "structure": "int   //Include the subcategories in the search"
                        },
                        {
                            "title": "tagids",
                            "structure": "list of ( int   //Tag id)"
                        },
                        {
                            "title": "contextid",
                            "structure": "int   //Context id that the questions will be rendered in (used for exporting)"
                        },
                        {
                            "title": "limit",
                            "structure": "int  Default to \"0\" //Maximum number of results to return"
                        },
                        {
                            "title": "offset",
                            "structure": "int  Default to \"0\" //Number of items to skip from the begging of the result set"
                        }
                    ],
                    "response": "type reponse = {\n    totalcount: number\n    questions: {\n        id: number\n        category: number\n        parent: number\n        name: string\n        qtype: string\n        icon: {\n            key: string\n            component: string\n            alttext: string\n        }\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "role": {
            "assign": [
                {
                    "title": "core_role_assign_roles",
                    "description": "Manual role assignments.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "assignments",
                            "structure": "list of ( object {roleid int   //Role to assign to the useruserid int   //The user that is going to be assignedcontextid int  Optional //The context to assign the user role incontextlevel string  Optional //The context level to assign the user role in                                (block, course, coursecat, system, user, module)instanceid int  Optional //The Instance id of item where the role needs to be assigned})"
                        }
                    ],
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "tag": {
            "get": [
                {
                    "title": "core_tag_get_tagindex",
                    "description": "Gets tag index page for one tag and one tag area",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "tagindex",
                            "structure": "  //parametersobject {tag string   //tag nametc int   //tag collection idta int   //tag area idexcl int  Optional //exlusive mode for this tag areafrom int  Optional //context id where the link was displayedctx int  Optional //context id where to search for itemsrec int  Optional //search in the context recursivepage int  Optional //page number (0-based)}"
                        }
                    ],
                    "response": "General structure\n  //tag indexobject {tagid int   //tag idta int   //tag area idcomponent string   //componentitemtype string   //itemtypenextpageurl string  Optional //URL for the next pageprevpageurl string  Optional //URL for the next pageexclusiveurl string  Optional //URL for exclusive linkexclusivetext string  Optional //text for exclusive linktitle string   //titlecontent string   //titlehascontent int   //whether the content is presentanchor string  Optional //name of anchor}",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_tag_get_tags",
                    "description": "Gets tags by their ids",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "tags",
                            "structure": "list of ( object {id int   //tag id})"
                        }
                    ],
                    "response": "type reponse = {\n    tags: {\n        id: number\n        tagcollid: number\n        name: string\n        rawname: string\n        description: string\n        descriptionformat: number\n        flag: number\n        official: number\n        isstandard: number\n        viewurl: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "user": {
            "add": [
                {
                    "title": "core_user_add_user_device",
                    "description": "Store mobile user devices information for PUSH Notifications.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "appid",
                            "structure": "string   //the app id, usually something like com.moodle.moodlemobile"
                        },
                        {
                            "title": "name",
                            "structure": "string   //the device name, 'occam' or 'iPhone' etc."
                        },
                        {
                            "title": "model",
                            "structure": "string   //the device model 'Nexus4' or 'iPad1,1' etc."
                        },
                        {
                            "title": "platform",
                            "structure": "string   //the device platform 'iOS' or 'Android' etc."
                        },
                        {
                            "title": "version",
                            "structure": "string   //the device version '6.1.2' or '4.2.2' etc."
                        },
                        {
                            "title": "pushid",
                            "structure": "string   //the device PUSH token/key/identifier/registration id"
                        },
                        {
                            "title": "uuid",
                            "structure": "string   //the device UUID"
                        }
                    ],
                    "response": "type reponse = {\n    item: string\n    itemid: number\n    warningcode: string\n    message: string\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_user_add_user_private_files",
                    "description": "Copy files from a draft area to users private files area.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "draftid",
                            "structure": "int   //draft area id"
                        }
                    ],
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "delete": [
                {
                    "title": "core_user_delete_users",
                    "description": "Delete users.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "userids",
                            "structure": "list of ( int   //user ID)"
                        }
                    ],
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "get": [
                {
                    "title": "core_user_get_course_user_profiles",
                    "description": "Get course user profiles (each of the profils matching a course id\n                        and a user id),.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "userlist",
                            "structure": "list of ( object {userid int   //useridcourseid int   //courseid})"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    username: string\n    firstname: string\n    lastname: string\n    fullname: string\n    email: string\n    address: string\n    phone1: string\n    phone2: string\n    icq: string\n    skype: string\n    yahoo: string\n    aim: string\n    msn: string\n    department: string\n    institution: string\n    idnumber: string\n    interests: string\n    firstaccess: number\n    lastaccess: number\n    auth: string\n    suspended: number\n    confirmed: number\n    lang: string\n    calendartype: string\n    theme: string\n    timezone: string\n    mailformat: number\n    description: string\n    descriptionformat: number\n    city: string\n    url: string\n    country: string\n    profileimageurlsmall: string\n    profileimageurl: string\n    customfields: {\n        type: string\n        value: string\n        name: string\n        shortname: string\n    }[]\n    preferences: {\n        name: string\n        value: string\n    }[]\n    groups: {\n        id: number\n        name: string\n        description: string\n        descriptionformat: number\n    }[]\n    roles: {\n        roleid: number\n        name: string\n        shortname: string\n        sortorder: number\n    }[]\n    enrolledcourses: {\n        id: number\n        fullname: string\n        shortname: string\n    }[]\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_user_get_private_files_info",
                    "description": "Returns general information about files in the user private files\n                        area.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //Id of the user, default to current user."
                        }
                    ],
                    "response": "type reponse = {\n    filecount: number\n    foldercount: number\n    filesize: number\n    filesizewithoutreferences: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_user_get_user_preferences",
                    "description": "Return user preferences.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "name",
                            "structure": "string  Default to \"\" //preference name, empty for all"
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //id of the user, default to current user"
                        }
                    ],
                    "response": "type reponse = {\n    preferences: {\n        name: string\n        value: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_user_get_users",
                    "description": "search for users matching the parameters",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "criteria",
                            "structure": "  //the key/value pairs to be considered in user search. Values can not be empty.                    Specify different keys only once (fullname => 'user1', auth => 'manual', ...) -                    key occurences are forbidden.                    The search is executed with AND operator on the criterias. Invalid criterias (keys) are ignored,                    the search is still executed on the valid criterias.                    You can search without criteria, but the function is not designed for it.                    It could very slow or timeout. The function is designed to search some specific users.list of (object {key string   //the user column to search, expected keys (value format) are:                            \"id\" (int) matching user id,                            \"lastname\" (string) user last name (Note: you can use % for searching but it may be considerably slower!),                            \"firstname\" (string) user first name (Note: you can use % for searching but it may be considerably slower!),                            \"idnumber\" (string) matching user idnumber,                            \"username\" (string) matching user username,                            \"email\" (string) user email (Note: you can use % for searching but it may be considerably slower!),                            \"auth\" (string) matching user auth pluginvalue string   //the value to search})"
                        }
                    ],
                    "response": "type reponse = {\n    users: {\n        id: number\n        username: string\n        firstname: string\n        lastname: string\n        fullname: string\n        email: string\n        address: string\n        phone1: string\n        phone2: string\n        icq: string\n        skype: string\n        yahoo: string\n        aim: string\n        msn: string\n        department: string\n        institution: string\n        idnumber: string\n        interests: string\n        firstaccess: number\n        lastaccess: number\n        auth: string\n        suspended: number\n        confirmed: number\n        lang: string\n        calendartype: string\n        theme: string\n        timezone: string\n        mailformat: number\n        description: string\n        descriptionformat: number\n        city: string\n        url: string\n        country: string\n        profileimageurlsmall: string\n        profileimageurl: string\n        customfields: {\n            type: string\n            value: string\n            name: string\n            shortname: string\n        }[]\n        preferences: {\n            name: string\n            value: string\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_user_get_users_by_field",
                    "description": "Retrieve users' information for a specified unique field - If you\n                        want to do a user search, use core_user_get_users()",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "field",
                            "structure": "string   //the search field can be                'id' or 'idnumber' or 'username' or 'email'"
                        },
                        {
                            "title": "values",
                            "structure": "list of ( string   //the value to match)"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    username: string\n    firstname: string\n    lastname: string\n    fullname: string\n    email: string\n    address: string\n    phone1: string\n    phone2: string\n    icq: string\n    skype: string\n    yahoo: string\n    aim: string\n    msn: string\n    department: string\n    institution: string\n    idnumber: string\n    interests: string\n    firstaccess: number\n    lastaccess: number\n    auth: string\n    suspended: number\n    confirmed: number\n    lang: string\n    calendartype: string\n    theme: string\n    timezone: string\n    mailformat: number\n    description: string\n    descriptionformat: number\n    city: string\n    url: string\n    country: string\n    profileimageurlsmall: string\n    profileimageurl: string\n    customfields: {\n        type: string\n        value: string\n        name: string\n        shortname: string\n    }[]\n    preferences: {\n        name: string\n        value: string\n    }[]\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "update": [
                {
                    "title": "core_user_update_picture",
                    "description": "Update or delete the user picture in the site",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "draftitemid",
                            "structure": "int   //Id of the user draft file to use as image"
                        },
                        {
                            "title": "delete",
                            "structure": "int  Default to \"\" //If we should delete the user picture"
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //Id of the user, 0 for current user"
                        }
                    ],
                    "response": "type reponse = {\n    success: number\n    profileimageurl: string\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_user_update_user_preferences",
                    "description": "Update a user's preferences",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //id of the user, default to current user"
                        },
                        {
                            "title": "emailstop",
                            "structure": "int  Default to \"null\" //Enable or disable notifications for this user"
                        },
                        {
                            "title": "preferences",
                            "structure": " Default to \"Array\n(\n)\n\" //User preferenceslist of (object {type string   //The name of the preferencevalue string   //The value of the preference})"
                        }
                    ],
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "core_user_update_users",
                    "description": "Update users.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "users",
                            "structure": "list of ( object {id int   //ID of the userusername string  Optional //Username policy is defined in Moodle security config.password string  Optional //Plain text password consisting of any charactersfirstname string  Optional //The first name(s) of the userlastname string  Optional //The family name of the useremail string  Optional //A valid and unique email addressauth string  Optional //Auth plugins include manual, ldap, etcsuspended int  Optional //Suspend user account, either false to enable user login or true to disable itidnumber string  Optional //An arbitrary ID code number perhaps from the institutionlang string  Optional //Language code such as \"en\", must exist on servercalendartype string  Optional //Calendar type such as \"gregorian\", must exist on servertheme string  Optional //Theme name such as \"standard\", must exist on servertimezone string  Optional //Timezone code such as Australia/Perth, or 99 for defaultmailformat int  Optional //Mail format code is 0 for plain text, 1 for HTML etcdescription string  Optional //User profile description, no HTMLcity string  Optional //Home city of the usercountry string  Optional //Home country code of the user, such as AU or CZfirstnamephonetic string  Optional //The first name(s) phonetically of the userlastnamephonetic string  Optional //The family name phonetically of the usermiddlename string  Optional //The middle name of the useralternatename string  Optional //The alternate name of the useruserpicture int  Optional //The itemid where the new user picture has been uploaded to, 0 to deletecustomfields  Optional //User custom fields (also known as user profil fields)list of (object {type string   //The name of the custom fieldvalue string   //The value of the custom field})preferences  Optional //User preferenceslist of (object {type string   //The name of the preferencevalue string   //The value of the preference})})"
                        }
                    ],
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        }
    },
    "enrol": {
        "manual": {
            "enrol": [
                {
                    "title": "enrol_manual_enrol_users",
                    "description": "Manual enrol users",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "enrolments",
                            "structure": "list of ( object {roleid int   //Role to assign to the useruserid int   //The user that is going to be enrolledcourseid int   //The course to enrol the user role intimestart int  Optional //Timestamp when the enrolment starttimeend int  Optional //Timestamp when the enrolment endsuspend int  Optional //set to 1 to suspend the enrolment})"
                        }
                    ],
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        }
    },
    "gradereport": {
        "overview": {
            "view": [
                {
                    "title": "gradereport_overview_view_grade_report",
                    "description": "Trigger the report view event",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseid",
                            "structure": "int   //id of the course"
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //id of the user, 0 means current user"
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "user": {
            "get": [
                {
                    "title": "gradereport_user_get_grades_table",
                    "description": "Get the user/s report grades table for a course",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseid",
                            "structure": "int   //Course Id"
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //Return grades only for this user (optional)"
                        },
                        {
                            "title": "groupid",
                            "structure": "int  Default to \"0\" //Get users from this group only"
                        }
                    ],
                    "response": "type reponse = {\n    tables: {\n        courseid: number\n        userid: number\n        userfullname: string\n        maxdepth: number\n        tabledata: {\n            itemname: {\n                class: string\n                colspan: number\n                content: string\n                celltype: string\n                id: string\n            }\n            leader: {\n                class: string\n                rowspan: number\n            }\n            weight: {\n                class: string\n                content: string\n                headers: string\n            }\n            grade: {\n                class: string\n                content: string\n                headers: string\n            }\n            range: {\n                class: string\n                content: string\n                headers: string\n            }\n            percentage: {\n                class: string\n                content: string\n                headers: string\n            }\n            lettergrade: {\n                class: string\n                content: string\n                headers: string\n            }\n            rank: {\n                class: string\n                content: string\n                headers: string\n            }\n            average: {\n                class: string\n                content: string\n                headers: string\n            }\n            feedback: {\n                class: string\n                content: string\n                headers: string\n            }\n            contributiontocoursetotal: {\n                class: string\n                content: string\n                headers: string\n            }\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        }
    },
    "message": {
        "airnotifier": {
            "are": [
                {
                    "title": "message_airnotifier_are_notification_preferences_configured",
                    "description": "Check if the users have notification preferences configured yet\n                    ",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "userids",
                            "structure": "list of ( int   //user ID)"
                        }
                    ],
                    "response": "type reponse = {\n    users: {\n        userid: number\n        configured: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "is": [
                {
                    "title": "message_airnotifier_is_system_configured",
                    "description": "Check whether the airnotifier settings have been configured",
                    "ajax": false,
                    "login": true,
                    "args": [],
                    "response": "General structure\nint   //0 if the system is not configured, 1 otherwise",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        }
    },
    "mod": {
        "assign": {
            "get": [
                {
                    "title": "mod_assign_get_assignments",
                    "description": "Returns the courses and assignments for the users capability",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": " Default to \"Array\n(\n)\n\" //0 or more course idslist of (int   //course id, empty for retrieving all the courses where the user is enroled in)"
                        },
                        {
                            "title": "capabilities",
                            "structure": " Default to \"Array\n(\n)\n\" //list of capabilities used to filter courseslist of (string   //capability)"
                        },
                        {
                            "title": "includenotenrolledcourses",
                            "structure": "int  Default to \"\" //whether to return courses that the user can see                                                                even if is not enroled in. This requires the parameter courseids                                                                to not be empty."
                        }
                    ],
                    "response": "type reponse = {\n    courses: {\n        id: number\n        fullname: string\n        shortname: string\n        timemodified: number\n        assignments: {\n            id: number\n            cmid: number\n            course: number\n            name: string\n            nosubmissions: number\n            submissiondrafts: number\n            sendnotifications: number\n            sendlatenotifications: number\n            sendstudentnotifications: number\n            duedate: number\n            allowsubmissionsfromdate: number\n            grade: number\n            timemodified: number\n            completionsubmit: number\n            cutoffdate: number\n            gradingduedate: number\n            teamsubmission: number\n            requireallteammemberssubmit: number\n            teamsubmissiongroupingid: number\n            blindmarking: number\n            revealidentities: number\n            attemptreopenmethod: string\n            maxattempts: number\n            markingworkflow: number\n            markingallocation: number\n            requiresubmissionstatement: number\n            preventsubmissionnotingroup: number\n            submissionstatement: string\n            submissionstatementformat: number\n            configs: {\n                id: number\n                assignment: number\n                plugin: string\n                subtype: string\n                name: string\n                value: string\n            }[]\n            intro: string\n            introformat: number\n            introfiles: {\n                filename: string\n                filepath: string\n                filesize: number\n                fileurl: string\n                timemodified: number\n                mimetype: string\n                isexternalfile: number\n                repositorytype: string\n            }[]\n            introattachments: {\n                filename: string\n                filepath: string\n                filesize: number\n                fileurl: string\n                timemodified: number\n                mimetype: string\n                isexternalfile: number\n                repositorytype: string\n            }[]\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_assign_get_grades",
                    "description": "Returns grades from the assignment",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "assignmentids",
                            "structure": "  //1 or more assignment idslist of (int   //assignment id)"
                        },
                        {
                            "title": "since",
                            "structure": "int  Default to \"0\" //timestamp, only return records where timemodified >= since"
                        }
                    ],
                    "response": "type reponse = {\n    assignments: {\n        assignmentid: number\n        grades: {\n            id: number\n            assignment: number\n            userid: number\n            attemptnumber: number\n            timecreated: number\n            timemodified: number\n            grader: number\n            grade: string\n            gradefordisplay: string\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_assign_get_participant",
                    "description": "Get a participant for an assignment, with some summary info about\n                        their submissions.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "assignid",
                            "structure": "int   //assign instance id"
                        },
                        {
                            "title": "userid",
                            "structure": "int   //user id"
                        },
                        {
                            "title": "embeduser",
                            "structure": "int  Default to \"\" //user id"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    fullname: string\n    submitted: number\n    requiregrading: number\n    grantedextension: number\n    blindmarking: number\n    allowsubmissionsfromdate: number\n    duedate: number\n    cutoffdate: number\n    duedatestr: string\n    groupid: number\n    groupname: string\n    user: {\n        id: number\n        username: string\n        firstname: string\n        lastname: string\n        fullname: string\n        email: string\n        address: string\n        phone1: string\n        phone2: string\n        icq: string\n        skype: string\n        yahoo: string\n        aim: string\n        msn: string\n        department: string\n        institution: string\n        idnumber: string\n        interests: string\n        firstaccess: number\n        lastaccess: number\n        auth: string\n        suspended: number\n        confirmed: number\n        lang: string\n        calendartype: string\n        theme: string\n        timezone: string\n        mailformat: number\n        description: string\n        descriptionformat: number\n        city: string\n        url: string\n        country: string\n        profileimageurlsmall: string\n        profileimageurl: string\n        customfields: {\n            type: string\n            value: string\n            name: string\n            shortname: string\n        }[]\n        preferences: {\n            name: string\n            value: string\n        }[]\n    }\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_assign_get_submission_status",
                    "description": "Returns information about an assignment submission status for a\n                        given user.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "assignid",
                            "structure": "int   //assignment instance id"
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //user id (empty for current user)"
                        },
                        {
                            "title": "groupid",
                            "structure": "int  Default to \"0\" //filter by users in group (used for generating the grading summary).                Empty or 0 for all groups information."
                        }
                    ],
                    "response": "type reponse = {\n    gradingsummary: {\n        participantcount: number\n        submissiondraftscount: number\n        submissionsenabled: number\n        submissionssubmittedcount: number\n        submissionsneedgradingcount: number\n        warnofungroupedusers: number\n    }\n    lastattempt: {\n        submission: {\n            id: number\n            userid: number\n            attemptnumber: number\n            timecreated: number\n            timemodified: number\n            status: string\n            groupid: number\n            assignment: number\n            latest: number\n            plugins: {\n                type: string\n                name: string\n                fileareas: {\n                    area: string\n                    files: {\n                        filename: string\n                        filepath: string\n                        filesize: number\n                        fileurl: string\n                        timemodified: number\n                        mimetype: string\n                        isexternalfile: number\n                        repositorytype: string\n                    }[]\n                }[]\n                editorfields: {\n                    name: string\n                    description: string\n                    text: string\n                    format: number\n                }[]\n            }[]\n            gradingstatus: string\n        }\n        teamsubmission: {\n            id: number\n            userid: number\n            attemptnumber: number\n            timecreated: number\n            timemodified: number\n            status: string\n            groupid: number\n            assignment: number\n            latest: number\n            plugins: {\n                type: string\n                name: string\n                fileareas: {\n                    area: string\n                    files: {\n                        filename: string\n                        filepath: string\n                        filesize: number\n                        fileurl: string\n                        timemodified: number\n                        mimetype: string\n                        isexternalfile: number\n                        repositorytype: string\n                    }[]\n                }[]\n                editorfields: {\n                    name: string\n                    description: string\n                    text: string\n                    format: number\n                }[]\n            }[]\n            gradingstatus: string\n        }\n        submissiongroup: number\n        submissiongroupmemberswhoneedtosubmit: {}[]\n        submissionsenabled: number\n        locked: number\n        graded: number\n        canedit: number\n        caneditowner: number\n        cansubmit: number\n        extensionduedate: number\n        blindmarking: number\n        gradingstatus: string\n        usergroups: {}[]\n    }\n    feedback: {\n        grade: {\n            id: number\n            assignment: number\n            userid: number\n            attemptnumber: number\n            timecreated: number\n            timemodified: number\n            grader: number\n            grade: string\n            gradefordisplay: string\n        }\n        gradefordisplay: string\n        gradeddate: number\n        plugins: {\n            type: string\n            name: string\n            fileareas: {\n                area: string\n                files: {\n                    filename: string\n                    filepath: string\n                    filesize: number\n                    fileurl: string\n                    timemodified: number\n                    mimetype: string\n                    isexternalfile: number\n                    repositorytype: string\n                }[]\n            }[]\n            editorfields: {\n                name: string\n                description: string\n                text: string\n                format: number\n            }[]\n        }[]\n    }\n    previousattempts: {\n        attemptnumber: number\n        submission: {\n            id: number\n            userid: number\n            attemptnumber: number\n            timecreated: number\n            timemodified: number\n            status: string\n            groupid: number\n            assignment: number\n            latest: number\n            plugins: {\n                type: string\n                name: string\n                fileareas: {\n                    area: string\n                    files: {\n                        filename: string\n                        filepath: string\n                        filesize: number\n                        fileurl: string\n                        timemodified: number\n                        mimetype: string\n                        isexternalfile: number\n                        repositorytype: string\n                    }[]\n                }[]\n                editorfields: {\n                    name: string\n                    description: string\n                    text: string\n                    format: number\n                }[]\n            }[]\n            gradingstatus: string\n        }\n        grade: {\n            id: number\n            assignment: number\n            userid: number\n            attemptnumber: number\n            timecreated: number\n            timemodified: number\n            grader: number\n            grade: string\n            gradefordisplay: string\n        }\n        feedbackplugins: {\n            type: string\n            name: string\n            fileareas: {\n                area: string\n                files: {\n                    filename: string\n                    filepath: string\n                    filesize: number\n                    fileurl: string\n                    timemodified: number\n                    mimetype: string\n                    isexternalfile: number\n                    repositorytype: string\n                }[]\n            }[]\n            editorfields: {\n                name: string\n                description: string\n                text: string\n                format: number\n            }[]\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_assign_get_submissions",
                    "description": "Returns the submissions for assignments",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "assignmentids",
                            "structure": "  //1 or more assignment idslist of (int   //assignment id)"
                        },
                        {
                            "title": "status",
                            "structure": "string  Default to \"\" //status"
                        },
                        {
                            "title": "since",
                            "structure": "int  Default to \"0\" //submitted since"
                        },
                        {
                            "title": "before",
                            "structure": "int  Default to \"0\" //submitted before"
                        }
                    ],
                    "response": "type reponse = {\n    assignments: {\n        assignmentid: number\n        submissions: {\n            id: number\n            userid: number\n            attemptnumber: number\n            timecreated: number\n            timemodified: number\n            status: string\n            groupid: number\n            assignment: number\n            latest: number\n            plugins: {\n                type: string\n                name: string\n                fileareas: {\n                    area: string\n                    files: {\n                        filename: string\n                        filepath: string\n                        filesize: number\n                        fileurl: string\n                        timemodified: number\n                        mimetype: string\n                        isexternalfile: number\n                        repositorytype: string\n                    }[]\n                }[]\n                editorfields: {\n                    name: string\n                    description: string\n                    text: string\n                    format: number\n                }[]\n            }[]\n            gradingstatus: string\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_assign_get_user_flags",
                    "description": "Returns the user flags for assignments",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "assignmentids",
                            "structure": "  //1 or more assignment idslist of (int   //assignment id)"
                        }
                    ],
                    "response": "type reponse = {\n    assignments: {\n        assignmentid: number\n        userflags: {\n            id: number\n            userid: number\n            locked: number\n            mailed: number\n            extensionduedate: number\n            workflowstate: string\n            allocatedmarker: number\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_assign_get_user_mappings",
                    "description": "Returns the blind marking mappings for assignments",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "assignmentids",
                            "structure": "  //1 or more assignment idslist of (int   //assignment id)"
                        }
                    ],
                    "response": "type reponse = {\n    assignments: {\n        assignmentid: number\n        mappings: {\n            id: number\n            userid: number\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "reveal": [
                {
                    "title": "mod_assign_reveal_identities",
                    "description": "Reveal the identities for a blind marking assignment",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "assignmentid",
                            "structure": "int   //The assignment id to operate on"
                        }
                    ],
                    "response": "General structure\n Optional //list of warningslist of (  //warningobject {item string  Optional //itemitemid int  Optional //item idwarningcode string   //the warning code can be used by the client app to implement specific behaviourmessage string   //untranslated english message to explain the warning})",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "save": [
                {
                    "title": "mod_assign_save_grade",
                    "description": "Save a grade update for a single student.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "assignmentid",
                            "structure": "int   //The assignment id to operate on"
                        },
                        {
                            "title": "userid",
                            "structure": "int   //The student id to operate on"
                        },
                        {
                            "title": "grade",
                            "structure": "double   //The new grade for this user. Ignored if advanced grading used"
                        },
                        {
                            "title": "attemptnumber",
                            "structure": "int   //The attempt number (-1 means latest attempt)"
                        },
                        {
                            "title": "addattempt",
                            "structure": "int   //Allow another attempt if the attempt reopen method is manual"
                        },
                        {
                            "title": "workflowstate",
                            "structure": "string   //The next marking workflow state"
                        },
                        {
                            "title": "applytoall",
                            "structure": "int   //If true, this grade will be applied to all members of the group (for group assignments)."
                        },
                        {
                            "title": "plugindata",
                            "structure": " Default to \"Array\n(\n)\n\" //plugin dataobject {assignfeedbackcomments_editor  Optional //Editor structureobject {text string   //The text for this feedback.format int   //The format for this feedback}files_filemanager int  Optional //The id of a draft area containing files for this feedback.}"
                        },
                        {
                            "title": "advancedgradingdata",
                            "structure": " Default to \"Array\n(\n)\n\" //advanced grading dataobject {guide  Optional //itemsobject {criteria list of (object {criterionid int   //criterion idfillings  Optional //fillinglist of (object {criterionid int   //criterion idlevelid int  Optional //level idremark string  Optional //remarkremarkformat int  Optional //remark format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)score double   //maximum score})})}rubric  Optional //itemsobject {criteria list of (object {criterionid int   //criterion idfillings  Optional //fillinglist of (object {criterionid int   //criterion idlevelid int  Optional //level idremark string  Optional //remarkremarkformat int  Optional //remark format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)})})}}"
                        }
                    ],
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_assign_save_grades",
                    "description": "Save multiple grade updates for an assignment.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "assignmentid",
                            "structure": "int   //The assignment id to operate on"
                        },
                        {
                            "title": "applytoall",
                            "structure": "int   //If true, this grade will be applied to all members of the group (for group assignments)."
                        },
                        {
                            "title": "grades",
                            "structure": "list of ( object {userid int   //The student id to operate ongrade double   //The new grade for this user. Ignored if advanced grading usedattemptnumber int   //The attempt number (-1 means latest attempt)addattempt int   //Allow another attempt if manual attempt reopen methodworkflowstate string   //The next marking workflow stateplugindata  Default to \"Array\n(\n)\n\" //plugin dataobject {assignfeedbackcomments_editor  Optional //Editor structureobject {text string   //The text for this feedback.format int   //The format for this feedback}files_filemanager int  Optional //The id of a draft area containing files for this feedback.}advancedgradingdata  Default to \"Array\n(\n)\n\" //advanced grading dataobject {guide  Optional //itemsobject {criteria list of (object {criterionid int   //criterion idfillings  Optional //fillinglist of (object {criterionid int   //criterion idlevelid int  Optional //level idremark string  Optional //remarkremarkformat int  Optional //remark format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)score double   //maximum score})})}rubric  Optional //itemsobject {criteria list of (object {criterionid int   //criterion idfillings  Optional //fillinglist of (object {criterionid int   //criterion idlevelid int  Optional //level idremark string  Optional //remarkremarkformat int  Optional //remark format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)})})}}})"
                        }
                    ],
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_assign_save_submission",
                    "description": "Update the current students submission",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "assignmentid",
                            "structure": "int   //The assignment id to operate on"
                        },
                        {
                            "title": "plugindata",
                            "structure": "object {onlinetext_editor  Optional //Editor structureobject {text string   //The text for this submission.format int   //The format for this submissionitemid int   //The draft area id for files attached to the submission}files_filemanager int  Optional //The id of a draft area containing files for this submission.}"
                        }
                    ],
                    "response": "General structure\n Optional //list of warningslist of (  //warningobject {item string  Optional //itemitemid int  Optional //item idwarningcode string   //the warning code can be used by the client app to implement specific behaviourmessage string   //untranslated english message to explain the warning})",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_assign_save_user_extensions",
                    "description": "Save a list of assignment extensions",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "assignmentid",
                            "structure": "int   //The assignment id to operate on"
                        },
                        {
                            "title": "userids",
                            "structure": "  //1 or more user idslist of (int   //user id)"
                        },
                        {
                            "title": "dates",
                            "structure": "  //1 or more extension dates (timestamp)list of (int   //dates)"
                        }
                    ],
                    "response": "General structure\n Optional //list of warningslist of (  //warningobject {item string  Optional //itemitemid int  Optional //item idwarningcode string   //the warning code can be used by the client app to implement specific behaviourmessage string   //untranslated english message to explain the warning})",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "unlock": [
                {
                    "title": "mod_assign_unlock_submissions",
                    "description": "Allow students to make changes to a list of submissions",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "assignmentid",
                            "structure": "int   //The assignment id to operate on"
                        },
                        {
                            "title": "userids",
                            "structure": "  //1 or more user idslist of (int   //user id)"
                        }
                    ],
                    "response": "General structure\n Optional //list of warningslist of (  //warningobject {item string  Optional //itemitemid int  Optional //item idwarningcode string   //the warning code can be used by the client app to implement specific behaviourmessage string   //untranslated english message to explain the warning})",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "view": [
                {
                    "title": "mod_assign_view_assign",
                    "description": "Update the module completion status.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "assignid",
                            "structure": "int   //assign instance id"
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_assign_view_grading_table",
                    "description": "Trigger the grading_table_viewed event.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "assignid",
                            "structure": "int   //assign instance id"
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_assign_view_submission_status",
                    "description": "Trigger the submission status viewed event.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "assignid",
                            "structure": "int   //assign instance id"
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "chat": {
            "get": [
                {
                    "title": "mod_chat_get_chat_latest_messages",
                    "description": "Get the latest messages from the given chat session.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "chatsid",
                            "structure": "string   //chat session id (obtained via mod_chat_login_user)"
                        },
                        {
                            "title": "chatlasttime",
                            "structure": "int  Default to \"0\" //last time messages were retrieved (epoch time)"
                        }
                    ],
                    "response": "type reponse = {\n    messages: {\n        id: number\n        userid: number\n        system: number\n        message: string\n        timestamp: number\n    }[]\n    chatnewlasttime: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_chat_get_chat_users",
                    "description": "Get the list of users in the given chat session.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "chatsid",
                            "structure": "string   //chat session id (obtained via mod_chat_login_user)"
                        }
                    ],
                    "response": "type reponse = {\n    users: {\n        id: number\n        fullname: string\n        profileimageurl: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_chat_get_chats_by_courses",
                    "description": "Returns a list of\n                        chat instances in a provided set of courses, if no courses are provided\n                        then all the chat instances the user has access to will be returned.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": " Default to \"Array\n(\n)\n\" //Array of course idslist of (int   //course id)"
                        }
                    ],
                    "response": "type reponse = {\n    chats: {\n        id: number\n        coursemodule: number\n        course: number\n        name: string\n        intro: string\n        introformat: number\n        introfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        chatmethod: string\n        keepdays: number\n        studentlogs: number\n        chattime: number\n        schedule: number\n        timemodified: number\n        section: number\n        visible: number\n        groupmode: number\n        groupingid: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_chat_get_session_messages",
                    "description": "Retrieves messages of the given chat session.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "chatid",
                            "structure": "int   //Chat instance id."
                        },
                        {
                            "title": "sessionstart",
                            "structure": "int   //The session start time (timestamp)."
                        },
                        {
                            "title": "sessionend",
                            "structure": "int   //The session end time (timestamp)."
                        },
                        {
                            "title": "groupid",
                            "structure": "int  Default to \"0\" //Get messages from users in this group.                                            0 means that the function will determine the user group"
                        }
                    ],
                    "response": "type reponse = {\n    messages: {\n        id: number\n        chatid: number\n        userid: number\n        groupid: number\n        issystem: number\n        message: string\n        timestamp: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_chat_get_sessions",
                    "description": "Retrieves chat sessions for a given chat.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "chatid",
                            "structure": "int   //Chat instance id."
                        },
                        {
                            "title": "groupid",
                            "structure": "int  Default to \"0\" //Get messages from users in this group.                                            0 means that the function will determine the user group"
                        },
                        {
                            "title": "showall",
                            "structure": "int  Default to \"\" //Whether to show completed sessions or not."
                        }
                    ],
                    "response": "type reponse = {\n    sessions: {\n        sessionstart: number\n        sessionend: number\n        sessionusers: {\n            userid: number\n            messagecount: number\n        }[]\n        iscomplete: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "view": [
                {
                    "title": "mod_chat_view_chat",
                    "description": "Trigger the course module viewed event and update the module\n                        completion status.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "chatid",
                            "structure": "int   //chat instance id"
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "choice": {
            "delete": [
                {
                    "title": "mod_choice_delete_choice_responses",
                    "description": "Delete the given submitted responses in a choice",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "choiceid",
                            "structure": "int   //choice instance id"
                        },
                        {
                            "title": "responses",
                            "structure": " Default to \"Array\n(\n)\n\" //Array of response ids, empty for deleting all the current user responses.list of (int   //response id)"
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "get": [
                {
                    "title": "mod_choice_get_choice_results",
                    "description": "Retrieve users results for a given choice.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "choiceid",
                            "structure": "int   //choice instance id"
                        }
                    ],
                    "response": "type reponse = {\n    options: {\n        id: number\n        text: string\n        maxanswer: number\n        userresponses: {\n            userid: number\n            fullname: string\n            profileimageurl: string\n            answerid: number\n            timemodified: number\n        }[]\n        numberofuser: number\n        percentageamount: double\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_choice_get_choices_by_courses",
                    "description": "Returns a list of\n                        choice instances in a provided set of courses, if no courses are\n                        provided then all the choice instances the user has access to will be\n                        returned.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": " Default to \"Array\n(\n)\n\" //Array of course idslist of (int   //course id)"
                        }
                    ],
                    "response": "type reponse = {\n    choices: {\n        id: number\n        coursemodule: number\n        course: number\n        name: string\n        intro: string\n        introformat: number\n        introfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        publish: number\n        showresults: number\n        display: number\n        allowupdate: number\n        allowmultiple: number\n        showunanswered: number\n        includeinactive: number\n        limitanswers: number\n        timeopen: number\n        timeclose: number\n        showpreview: number\n        timemodified: number\n        completionsubmit: number\n        section: number\n        visible: number\n        groupmode: number\n        groupingid: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "data": {
            "add": [
                {
                    "title": "mod_data_add_entry",
                    "description": "Adds a new entry.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "databaseid",
                            "structure": "int   //data instance id"
                        },
                        {
                            "title": "groupid",
                            "structure": "int  Default to \"0\" //Group id, 0 means that the function will determine the user group"
                        },
                        {
                            "title": "data",
                            "structure": "  //The fields data to be createdlist of (object {fieldid int   //The field id.subfield string  Default to \"\" //The subfield name (if required).value string   //The contents for the field always JSON encoded.})"
                        }
                    ],
                    "response": "type reponse = {\n    newentryid: number\n    generalnotifications: {}[]\n    fieldnotifications: {\n        fieldname: string\n        notification: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "get": [
                {
                    "title": "mod_data_get_data_access_information",
                    "description": "Return access information for a given database.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "databaseid",
                            "structure": "int   //Database instance id."
                        },
                        {
                            "title": "groupid",
                            "structure": "int  Default to \"0\" //Group id, 0 means that the function will determine the user group."
                        }
                    ],
                    "response": "type reponse = {\n    groupid: number\n    canaddentry: number\n    canmanageentries: number\n    canapprove: number\n    timeavailable: number\n    inreadonlyperiod: number\n    numentries: number\n    entrieslefttoadd: number\n    entrieslefttoview: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_data_get_databases_by_courses",
                    "description": "Returns a list of\n                        database instances in a provided set of courses, if no courses are\n                        provided then all the database instances the user has access to will be\n                        returned.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": " Default to \"Array\n(\n)\n\" //Array of course idslist of (int   //course id)"
                        }
                    ],
                    "response": "type reponse = {\n    databases: {\n        id: number\n        course: number\n        name: string\n        intro: string\n        introformat: number\n        comments: number\n        timeavailablefrom: number\n        timeavailableto: number\n        timeviewfrom: number\n        timeviewto: number\n        requiredentries: number\n        requiredentriestoview: number\n        maxentries: number\n        rssarticles: number\n        singletemplate: string\n        listtemplate: string\n        listtemplateheader: string\n        listtemplatefooter: string\n        addtemplate: string\n        rsstemplate: string\n        rsstitletemplate: string\n        csstemplate: string\n        jstemplate: string\n        asearchtemplate: string\n        approval: number\n        manageapproved: number\n        scale: number\n        assessed: number\n        assesstimestart: number\n        assesstimefinish: number\n        defaultsort: number\n        defaultsortdir: number\n        editany: number\n        notification: number\n        timemodified: number\n        coursemodule: number\n        introfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_data_get_entries",
                    "description": "Return the complete list of entries of the given database.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "databaseid",
                            "structure": "int   //data instance id"
                        },
                        {
                            "title": "groupid",
                            "structure": "int  Default to \"0\" //Group id, 0 means that the function will determine the user group"
                        },
                        {
                            "title": "returncontents",
                            "structure": "int  Default to \"\" //Whether to return contents or not. This will return each entry                                                    raw contents and the complete list view (using the template)."
                        },
                        {
                            "title": "sort",
                            "structure": "int  Default to \"null\" //Sort the records by this field id, reserved ids are:                                            0: timeadded                                            -1: firstname                                            -2: lastname                                            -3: approved                                            -4: timemodified.                                            Empty for using the default database setting."
                        },
                        {
                            "title": "order",
                            "structure": "string  Default to \"null\" //The direction of the sorting: 'ASC' or 'DESC'.                                            Empty for using the default database setting."
                        },
                        {
                            "title": "page",
                            "structure": "int  Default to \"0\" //The page of records to return."
                        },
                        {
                            "title": "perpage",
                            "structure": "int  Default to \"0\" //The number of records to return per page"
                        }
                    ],
                    "response": "type reponse = {\n    entries: {\n        id: number\n        userid: number\n        groupid: number\n        dataid: number\n        timecreated: number\n        timemodified: number\n        approved: number\n        canmanageentry: number\n        fullname: string\n        contents: {\n            id: number\n            fieldid: number\n            recordid: number\n            content: string\n            content1: string\n            content2: string\n            content3: string\n            content4: string\n            files: {\n                filename: string\n                filepath: string\n                filesize: number\n                fileurl: string\n                timemodified: number\n                mimetype: string\n                isexternalfile: number\n                repositorytype: string\n            }[]\n        }[]\n    }[]\n    totalcount: number\n    totalfilesize: number\n    listviewcontents: string\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_data_get_entry",
                    "description": "Return one entry record from the database, including contents\n                        optionally.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "entryid",
                            "structure": "int   //record entry id"
                        },
                        {
                            "title": "returncontents",
                            "structure": "int  Default to \"\" //Whether to return contents or not."
                        }
                    ],
                    "response": "type reponse = {\n    entry: {\n        id: number\n        userid: number\n        groupid: number\n        dataid: number\n        timecreated: number\n        timemodified: number\n        approved: number\n        canmanageentry: number\n        fullname: string\n        contents: {\n            id: number\n            fieldid: number\n            recordid: number\n            content: string\n            content1: string\n            content2: string\n            content3: string\n            content4: string\n            files: {\n                filename: string\n                filepath: string\n                filesize: number\n                fileurl: string\n                timemodified: number\n                mimetype: string\n                isexternalfile: number\n                repositorytype: string\n            }[]\n        }[]\n    }\n    entryviewcontents: string\n    ratinginfo: {\n        contextid: number\n        component: string\n        ratingarea: string\n        canviewall: number\n        canviewany: number\n        scales: {\n            id: number\n            courseid: number\n            name: string\n            max: number\n            isnumeric: number\n            items: {\n                value: number\n                name: string\n            }[]\n        }[]\n        ratings: {\n            itemid: number\n            scaleid: number\n            userid: number\n            aggregate: double\n            aggregatestr: string\n            aggregatelabel: string\n            count: number\n            rating: number\n            canrate: number\n            canviewaggregate: number\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_data_get_fields",
                    "description": "Return the list of configured fields for the given database.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "databaseid",
                            "structure": "int   //Database instance id."
                        }
                    ],
                    "response": "type reponse = {\n    fields: {\n        id: number\n        dataid: number\n        type: string\n        name: string\n        description: string\n        required: number\n        param1: string\n        param2: string\n        param3: string\n        param4: string\n        param5: string\n        param6: string\n        param7: string\n        param8: string\n        param9: string\n        param10: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "view": [
                {
                    "title": "mod_data_view_database",
                    "description": "Simulate the view.php web interface data: trigger events,\n                        completion, etc...",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "databaseid",
                            "structure": "int   //data instance id"
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "feedback": {
            "get": [
                {
                    "title": "mod_feedback_get_analysis",
                    "description": "Retrieves the feedback analysis.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "feedbackid",
                            "structure": "int   //Feedback instance id"
                        },
                        {
                            "title": "groupid",
                            "structure": "int  Default to \"0\" //Group id, 0 means that the function will determine the user group"
                        }
                    ],
                    "response": "type reponse = {\n    completedcount: number\n    itemscount: number\n    itemsdata: {\n        item: {\n            id: number\n            feedback: number\n            template: number\n            name: string\n            label: string\n            presentation: string\n            typ: string\n            hasvalue: number\n            position: number\n            required: number\n            dependitem: number\n            dependvalue: string\n            options: string\n            itemfiles: {\n                contextid: number\n                component: string\n                filearea: string\n                itemid: number\n                filepath: string\n                filename: string\n                isdir: number\n                timemodified: number\n                timecreated: number\n                filesize: number\n                author: string\n                license: string\n                filenameshort: string\n                filesizeformatted: string\n                icon: string\n                timecreatedformatted: string\n                timemodifiedformatted: string\n                url: string\n            }[]\n            itemnumber: number\n            otherdata: string\n        }\n        data: {}[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_feedback_get_current_completed_tmp",
                    "description": "Returns the temporary completion record for the current user.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "feedbackid",
                            "structure": "int   //Feedback instance id"
                        }
                    ],
                    "response": "type reponse = {\n    feedback: {\n        id: number\n        feedback: number\n        userid: number\n        guestid: string\n        timemodified: number\n        random_response: number\n        anonymous_response: number\n        courseid: number\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_feedback_get_feedback_access_information",
                    "description": "Return access information for a given feedback.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "feedbackid",
                            "structure": "int   //Feedback instance id."
                        }
                    ],
                    "response": "type reponse = {\n    canviewanalysis: number\n    cancomplete: number\n    cansubmit: number\n    candeletesubmissions: number\n    canviewreports: number\n    canedititems: number\n    isempty: number\n    isopen: number\n    isalreadysubmitted: number\n    isanonymous: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_feedback_get_feedbacks_by_courses",
                    "description": "Returns a list of\n                        feedbacks in a provided list of courses, if no list is provided all\n                        feedbacks that the user can view will be returned.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": " Default to \"Array\n(\n)\n\" //Array of course idslist of (int   //Course id)"
                        }
                    ],
                    "response": "type reponse = {\n    feedbacks: {\n        id: number\n        course: number\n        name: string\n        intro: string\n        introformat: number\n        anonymous: number\n        email_notification: number\n        multiple_submit: number\n        autonumbering: number\n        site_after_submit: string\n        page_after_submit: string\n        page_after_submitformat: number\n        publish_stats: number\n        timeopen: number\n        timeclose: number\n        timemodified: number\n        completionsubmit: number\n        coursemodule: number\n        introfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        pageaftersubmitfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_feedback_get_finished_responses",
                    "description": "Retrieves responses from the last finished attempt.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "feedbackid",
                            "structure": "int   //Feedback instance id."
                        }
                    ],
                    "response": "type reponse = {\n    responses: {\n        id: number\n        course_id: number\n        item: number\n        completed: number\n        tmp_completed: number\n        value: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_feedback_get_items",
                    "description": "Returns the items (questions) in the given feedback.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "feedbackid",
                            "structure": "int   //Feedback instance id"
                        }
                    ],
                    "response": "type reponse = {\n    items: {\n        id: number\n        feedback: number\n        template: number\n        name: string\n        label: string\n        presentation: string\n        typ: string\n        hasvalue: number\n        position: number\n        required: number\n        dependitem: number\n        dependvalue: string\n        options: string\n        itemfiles: {\n            contextid: number\n            component: string\n            filearea: string\n            itemid: number\n            filepath: string\n            filename: string\n            isdir: number\n            timemodified: number\n            timecreated: number\n            filesize: number\n            author: string\n            license: string\n            filenameshort: string\n            filesizeformatted: string\n            icon: string\n            timecreatedformatted: string\n            timemodifiedformatted: string\n            url: string\n        }[]\n        itemnumber: number\n        otherdata: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_feedback_get_last_completed",
                    "description": "Retrieves the last completion record for the current user.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "feedbackid",
                            "structure": "int   //Feedback instance id"
                        }
                    ],
                    "response": "type reponse = {\n    completed: {\n        id: number\n        feedback: number\n        userid: number\n        timemodified: number\n        random_response: number\n        anonymous_response: number\n        courseid: number\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_feedback_get_non_respondents",
                    "description": "Retrieves a list of students who didn't submit the feedback.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "feedbackid",
                            "structure": "int   //Feedback instance id"
                        },
                        {
                            "title": "groupid",
                            "structure": "int  Default to \"0\" //Group id, 0 means that the function will determine the user group."
                        },
                        {
                            "title": "sort",
                            "structure": "string  Default to \"lastaccess\" //Sort param, must be firstname, lastname or lastaccess (default)."
                        },
                        {
                            "title": "page",
                            "structure": "int  Default to \"0\" //The page of records to return."
                        },
                        {
                            "title": "perpage",
                            "structure": "int  Default to \"0\" //The number of records to return per page."
                        }
                    ],
                    "response": "type reponse = {\n    users: {\n        courseid: number\n        userid: number\n        fullname: string\n        started: number\n    }[]\n    total: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_feedback_get_page_items",
                    "description": "Get a single feedback page items.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "feedbackid",
                            "structure": "int   //Feedback instance id"
                        },
                        {
                            "title": "page",
                            "structure": "int   //The page to get starting by 0"
                        }
                    ],
                    "response": "type reponse = {\n    items: {\n        id: number\n        feedback: number\n        template: number\n        name: string\n        label: string\n        presentation: string\n        typ: string\n        hasvalue: number\n        position: number\n        required: number\n        dependitem: number\n        dependvalue: string\n        options: string\n        itemfiles: {\n            contextid: number\n            component: string\n            filearea: string\n            itemid: number\n            filepath: string\n            filename: string\n            isdir: number\n            timemodified: number\n            timecreated: number\n            filesize: number\n            author: string\n            license: string\n            filenameshort: string\n            filesizeformatted: string\n            icon: string\n            timecreatedformatted: string\n            timemodifiedformatted: string\n            url: string\n        }[]\n        itemnumber: number\n        otherdata: string\n    }[]\n    hasprevpage: number\n    hasnextpage: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_feedback_get_responses_analysis",
                    "description": "Return the feedback user responses analysis.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "feedbackid",
                            "structure": "int   //Feedback instance id"
                        },
                        {
                            "title": "groupid",
                            "structure": "int  Default to \"0\" //Group id, 0 means that the function will determine the user group"
                        },
                        {
                            "title": "page",
                            "structure": "int  Default to \"0\" //The page of records to return."
                        },
                        {
                            "title": "perpage",
                            "structure": "int  Default to \"0\" //The number of records to return per page"
                        }
                    ],
                    "response": "type reponse = {\n    attempts: {\n        id: number\n        courseid: number\n        userid: number\n        timemodified: number\n        fullname: string\n        responses: {\n            id: number\n            name: string\n            printval: string\n            rawval: string\n        }[]\n    }[]\n    totalattempts: number\n    anonattempts: {\n        id: number\n        courseid: number\n        number: number\n        responses: {\n            id: number\n            name: string\n            printval: string\n            rawval: string\n        }[]\n    }[]\n    totalanonattempts: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_feedback_get_unfinished_responses",
                    "description": "Retrieves responses from the current unfinished attempt.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "feedbackid",
                            "structure": "int   //Feedback instance id."
                        }
                    ],
                    "response": "type reponse = {\n    responses: {\n        id: number\n        course_id: number\n        item: number\n        completed: number\n        tmp_completed: number\n        value: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "view": [
                {
                    "title": "mod_feedback_view_feedback",
                    "description": "Trigger the course module viewed event and update the module\n                        completion status.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "feedbackid",
                            "structure": "int   //Feedback instance id"
                        },
                        {
                            "title": "moduleviewed",
                            "structure": "int  Default to \"\" //If we need to mark the module as viewed for completion"
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "forum": {
            "add": [
                {
                    "title": "mod_forum_add_discussion",
                    "description": "Add a new discussion into an existing forum.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "forumid",
                            "structure": "int   //Forum instance ID"
                        },
                        {
                            "title": "subject",
                            "structure": "string   //New Discussion subject"
                        },
                        {
                            "title": "message",
                            "structure": "string   //New Discussion message (only html format allowed)"
                        },
                        {
                            "title": "groupid",
                            "structure": "int  Default to \"0\" //The group, default to 0"
                        },
                        {
                            "title": "options",
                            "structure": " Default to \"Array\n(\n)\n\" //Optionslist of (object {name string   //The allowed keys (value format) are:                                    discussionsubscribe (bool); subscribe to the discussion?, default to true                                    discussionpinned    (bool); is the discussion pinned, default to false                                    inlineattachmentsid              (int); the draft file area id for inline attachments                                    attachmentsid       (int); the draft file area id for attachments                        value string   //The value of the option,                                                        This param is validated in the external function.})"
                        }
                    ],
                    "response": "type reponse = {\n    discussionid: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_forum_add_discussion_post",
                    "description": "Create new posts into an existing discussion.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "postid",
                            "structure": "int   //the post id we are going to reply to                                            (can be the initial discussion post"
                        },
                        {
                            "title": "subject",
                            "structure": "string   //new post subject"
                        },
                        {
                            "title": "message",
                            "structure": "string   //new post message (only html format allowed)"
                        },
                        {
                            "title": "options",
                            "structure": " Default to \"Array\n(\n)\n\" //Optionslist of (object {name string   //The allowed keys (value format) are:                                    discussionsubscribe (bool); subscribe to the discussion?, default to true                                    inlineattachmentsid              (int); the draft file area id for inline attachments                                    attachmentsid       (int); the draft file area id for attachments                        value string   //the value of the option,                                                        this param is validated in the external function.})"
                        }
                    ],
                    "response": "type reponse = {\n    postid: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "get": [
                {
                    "title": "mod_forum_get_forum_discussion_posts",
                    "description": "Returns a list of forum posts for a discussion.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "discussionid",
                            "structure": "int   //discussion ID"
                        },
                        {
                            "title": "sortby",
                            "structure": "string  Default to \"created\" //sort by this element: id, created or modified"
                        },
                        {
                            "title": "sortdirection",
                            "structure": "string  Default to \"DESC\" //sort direction: ASC or DESC"
                        }
                    ],
                    "response": "type reponse = {\n    posts: {\n        id: number\n        discussion: number\n        parent: number\n        userid: number\n        created: number\n        modified: number\n        mailed: number\n        subject: string\n        message: string\n        messageformat: number\n        messagetrust: number\n        messageinlinefiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        attachment: string\n        attachments: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        totalscore: number\n        mailnow: number\n        children: {}[]\n        canreply: number\n        postread: number\n        userfullname: string\n        userpictureurl: string\n        deleted: number\n    }[]\n    ratinginfo: {\n        contextid: number\n        component: string\n        ratingarea: string\n        canviewall: number\n        canviewany: number\n        scales: {\n            id: number\n            courseid: number\n            name: string\n            max: number\n            isnumeric: number\n            items: {\n                value: number\n                name: string\n            }[]\n        }[]\n        ratings: {\n            itemid: number\n            scaleid: number\n            userid: number\n            aggregate: double\n            aggregatestr: string\n            aggregatelabel: string\n            count: number\n            rating: number\n            canrate: number\n            canviewaggregate: number\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_forum_get_forum_discussions_paginated",
                    "description": "Returns a list of forum discussions optionally sorted and\n                        paginated.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "forumid",
                            "structure": "int   //forum instance id"
                        },
                        {
                            "title": "sortby",
                            "structure": "string  Default to \"timemodified\" //sort by this element: id, timemodified, timestart or timeend"
                        },
                        {
                            "title": "sortdirection",
                            "structure": "string  Default to \"DESC\" //sort direction: ASC or DESC"
                        },
                        {
                            "title": "page",
                            "structure": "int  Default to \"-1\" //current page"
                        },
                        {
                            "title": "perpage",
                            "structure": "int  Default to \"0\" //items per page"
                        }
                    ],
                    "response": "type reponse = {\n    discussions: {\n        id: number\n        name: string\n        groupid: number\n        timemodified: number\n        usermodified: number\n        timestart: number\n        timeend: number\n        discussion: number\n        parent: number\n        userid: number\n        created: number\n        modified: number\n        mailed: number\n        subject: string\n        message: string\n        messageformat: number\n        messagetrust: number\n        messageinlinefiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        attachment: string\n        attachments: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        totalscore: number\n        mailnow: number\n        userfullname: string\n        usermodifiedfullname: string\n        userpictureurl: string\n        usermodifiedpictureurl: string\n        numreplies: string\n        numunread: number\n        pinned: number\n        locked: number\n        canreply: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_forum_get_forums_by_courses",
                    "description": "Returns a list of\n                        forum instances in a provided set of courses, if no courses are provided\n                        then all the forum instances the user has access to will be returned.\n                    ",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": " Default to \"Array\n(\n)\n\" //Array of Course IDslist of (int   //course ID)"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    course: number\n    type: string\n    name: string\n    intro: string\n    introformat: number\n    introfiles: {\n        filename: string\n        filepath: string\n        filesize: number\n        fileurl: string\n        timemodified: number\n        mimetype: string\n        isexternalfile: number\n        repositorytype: string\n    }[]\n    assessed: number\n    assesstimestart: number\n    assesstimefinish: number\n    scale: number\n    maxbytes: number\n    maxattachments: number\n    forcesubscribe: number\n    trackingtype: number\n    rsstype: number\n    rssarticles: number\n    timemodified: number\n    warnafter: number\n    blockafter: number\n    blockperiod: number\n    completiondiscussions: number\n    completionreplies: number\n    completionposts: number\n    cmid: number\n    numdiscussions: number\n    cancreatediscussions: number\n    lockdiscussionafter: number\n    istracked: number\n    unreadpostscount: number\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "glossary": {
            "add": [
                {
                    "title": "mod_glossary_add_entry",
                    "description": "Add a new entry to a given glossary",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "glossaryid",
                            "structure": "int   //Glossary id"
                        },
                        {
                            "title": "concept",
                            "structure": "string   //Glossary concept"
                        },
                        {
                            "title": "definition",
                            "structure": "string   //Glossary concept definition"
                        },
                        {
                            "title": "definitionformat",
                            "structure": "int   //definition format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN)"
                        },
                        {
                            "title": "options",
                            "structure": " Default to \"Array\n(\n)\n\" //Optional settingslist of (object {name string   //The allowed keys (value format) are:                        inlineattachmentsid (int); the draft file area id for inline attachments                        attachmentsid (int); the draft file area id for attachments                        categories (comma separated int); comma separated category ids                        aliases (comma separated str); comma separated aliases                        usedynalink (bool); whether the entry should be automatically linked.                        casesensitive (bool); whether the entry is case sensitive.                        fullmatch (bool); whether to match whole words only.value string   //the value of the option (validated inside the function)})"
                        }
                    ],
                    "response": "type reponse = {\n    entryid: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "get": [
                {
                    "title": "mod_glossary_get_categories",
                    "description": "Get the categories.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The glossary ID"
                        },
                        {
                            "title": "from",
                            "structure": "int  Default to \"0\" //Start returning records from here"
                        },
                        {
                            "title": "limit",
                            "structure": "int  Default to \"20\" //Number of records to return"
                        }
                    ],
                    "response": "type reponse = {\n    count: number\n    categories: {\n        id: number\n        glossaryid: number\n        name: string\n        usedynalink: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_glossary_get_entries_by_author",
                    "description": "Browse entries by author.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //Glossary entry ID"
                        },
                        {
                            "title": "letter",
                            "structure": "string   //First letter of firstname or lastname, or either keywords: 'ALL' or 'SPECIAL'."
                        },
                        {
                            "title": "field",
                            "structure": "string  Default to \"LASTNAME\" //Search and order using: 'FIRSTNAME' or 'LASTNAME'"
                        },
                        {
                            "title": "sort",
                            "structure": "string  Default to \"ASC\" //The direction of the order: 'ASC' or 'DESC'"
                        },
                        {
                            "title": "from",
                            "structure": "int  Default to \"0\" //Start returning records from here"
                        },
                        {
                            "title": "limit",
                            "structure": "int  Default to \"20\" //Number of records to return"
                        },
                        {
                            "title": "options",
                            "structure": " Default to \"Array\n(\n)\n\" //An array of optionsobject {includenotapproved int  Default to \"0\" //When false, includes the non-approved entries created by the user. When true, also includes the ones that the user has the permission to approve.}"
                        }
                    ],
                    "response": "type reponse = {\n    count: number\n    entries: {\n        id: number\n        glossaryid: number\n        userid: number\n        userfullname: string\n        userpictureurl: string\n        concept: string\n        definition: string\n        definitionformat: number\n        definitiontrust: number\n        definitioninlinefiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        attachment: number\n        attachments: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        timecreated: number\n        timemodified: number\n        teacherentry: number\n        sourceglossaryid: number\n        usedynalink: number\n        casesensitive: number\n        fullmatch: number\n        approved: number\n    }[]\n    ratinginfo: {\n        contextid: number\n        component: string\n        ratingarea: string\n        canviewall: number\n        canviewany: number\n        scales: {\n            id: number\n            courseid: number\n            name: string\n            max: number\n            isnumeric: number\n            items: {\n                value: number\n                name: string\n            }[]\n        }[]\n        ratings: {\n            itemid: number\n            scaleid: number\n            userid: number\n            aggregate: double\n            aggregatestr: string\n            aggregatelabel: string\n            count: number\n            rating: number\n            canrate: number\n            canviewaggregate: number\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_glossary_get_entries_by_author_id",
                    "description": "Browse entries by author ID.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //Glossary entry ID"
                        },
                        {
                            "title": "authorid",
                            "structure": "int   //The author ID"
                        },
                        {
                            "title": "order",
                            "structure": "string  Default to \"CONCEPT\" //Order by: 'CONCEPT', 'CREATION' or 'UPDATE'"
                        },
                        {
                            "title": "sort",
                            "structure": "string  Default to \"ASC\" //The direction of the order: 'ASC' or 'DESC'"
                        },
                        {
                            "title": "from",
                            "structure": "int  Default to \"0\" //Start returning records from here"
                        },
                        {
                            "title": "limit",
                            "structure": "int  Default to \"20\" //Number of records to return"
                        },
                        {
                            "title": "options",
                            "structure": " Default to \"Array\n(\n)\n\" //An array of optionsobject {includenotapproved int  Default to \"0\" //When false, includes the non-approved entries created by the user. When true, also includes the ones that the user has the permission to approve.}"
                        }
                    ],
                    "response": "type reponse = {\n    count: number\n    entries: {\n        id: number\n        glossaryid: number\n        userid: number\n        userfullname: string\n        userpictureurl: string\n        concept: string\n        definition: string\n        definitionformat: number\n        definitiontrust: number\n        definitioninlinefiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        attachment: number\n        attachments: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        timecreated: number\n        timemodified: number\n        teacherentry: number\n        sourceglossaryid: number\n        usedynalink: number\n        casesensitive: number\n        fullmatch: number\n        approved: number\n    }[]\n    ratinginfo: {\n        contextid: number\n        component: string\n        ratingarea: string\n        canviewall: number\n        canviewany: number\n        scales: {\n            id: number\n            courseid: number\n            name: string\n            max: number\n            isnumeric: number\n            items: {\n                value: number\n                name: string\n            }[]\n        }[]\n        ratings: {\n            itemid: number\n            scaleid: number\n            userid: number\n            aggregate: double\n            aggregatestr: string\n            aggregatelabel: string\n            count: number\n            rating: number\n            canrate: number\n            canviewaggregate: number\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_glossary_get_entries_by_category",
                    "description": "Browse entries by category.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The glossary ID."
                        },
                        {
                            "title": "categoryid",
                            "structure": "int   //The category ID. Use '0' for all categories, or '-1' for uncategorised entries."
                        },
                        {
                            "title": "from",
                            "structure": "int  Default to \"0\" //Start returning records from here"
                        },
                        {
                            "title": "limit",
                            "structure": "int  Default to \"20\" //Number of records to return"
                        },
                        {
                            "title": "options",
                            "structure": " Default to \"Array\n(\n)\n\" //An array of optionsobject {includenotapproved int  Default to \"0\" //When false, includes the non-approved entries created by the user. When true, also includes the ones that the user has the permission to approve.}"
                        }
                    ],
                    "response": "type reponse = {\n    count: number\n    entries: {\n        id: number\n        glossaryid: number\n        userid: number\n        userfullname: string\n        userpictureurl: string\n        concept: string\n        definition: string\n        definitionformat: number\n        definitiontrust: number\n        definitioninlinefiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        attachment: number\n        attachments: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        timecreated: number\n        timemodified: number\n        teacherentry: number\n        sourceglossaryid: number\n        usedynalink: number\n        casesensitive: number\n        fullmatch: number\n        approved: number\n        categoryid: number\n        categoryname: string\n    }[]\n    ratinginfo: {\n        contextid: number\n        component: string\n        ratingarea: string\n        canviewall: number\n        canviewany: number\n        scales: {\n            id: number\n            courseid: number\n            name: string\n            max: number\n            isnumeric: number\n            items: {\n                value: number\n                name: string\n            }[]\n        }[]\n        ratings: {\n            itemid: number\n            scaleid: number\n            userid: number\n            aggregate: double\n            aggregatestr: string\n            aggregatelabel: string\n            count: number\n            rating: number\n            canrate: number\n            canviewaggregate: number\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_glossary_get_entries_by_date",
                    "description": "Browse entries by date.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //Glossary entry ID"
                        },
                        {
                            "title": "order",
                            "structure": "string  Default to \"UPDATE\" //Order the records by: 'CREATION' or 'UPDATE'."
                        },
                        {
                            "title": "sort",
                            "structure": "string  Default to \"DESC\" //The direction of the order: 'ASC' or 'DESC'"
                        },
                        {
                            "title": "from",
                            "structure": "int  Default to \"0\" //Start returning records from here"
                        },
                        {
                            "title": "limit",
                            "structure": "int  Default to \"20\" //Number of records to return"
                        },
                        {
                            "title": "options",
                            "structure": " Default to \"Array\n(\n)\n\" //An array of optionsobject {includenotapproved int  Default to \"0\" //When false, includes the non-approved entries created by the user. When true, also includes the ones that the user has the permission to approve.}"
                        }
                    ],
                    "response": "type reponse = {\n    count: number\n    entries: {\n        id: number\n        glossaryid: number\n        userid: number\n        userfullname: string\n        userpictureurl: string\n        concept: string\n        definition: string\n        definitionformat: number\n        definitiontrust: number\n        definitioninlinefiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        attachment: number\n        attachments: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        timecreated: number\n        timemodified: number\n        teacherentry: number\n        sourceglossaryid: number\n        usedynalink: number\n        casesensitive: number\n        fullmatch: number\n        approved: number\n    }[]\n    ratinginfo: {\n        contextid: number\n        component: string\n        ratingarea: string\n        canviewall: number\n        canviewany: number\n        scales: {\n            id: number\n            courseid: number\n            name: string\n            max: number\n            isnumeric: number\n            items: {\n                value: number\n                name: string\n            }[]\n        }[]\n        ratings: {\n            itemid: number\n            scaleid: number\n            userid: number\n            aggregate: double\n            aggregatestr: string\n            aggregatelabel: string\n            count: number\n            rating: number\n            canrate: number\n            canviewaggregate: number\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_glossary_get_entries_by_letter",
                    "description": "Browse entries by letter.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //Glossary entry ID"
                        },
                        {
                            "title": "letter",
                            "structure": "string   //A letter, or either keywords: 'ALL' or 'SPECIAL'."
                        },
                        {
                            "title": "from",
                            "structure": "int  Default to \"0\" //Start returning records from here"
                        },
                        {
                            "title": "limit",
                            "structure": "int  Default to \"20\" //Number of records to return"
                        },
                        {
                            "title": "options",
                            "structure": " Default to \"Array\n(\n)\n\" //An array of optionsobject {includenotapproved int  Default to \"0\" //When false, includes the non-approved entries created by the user. When true, also includes the ones that the user has the permission to approve.}"
                        }
                    ],
                    "response": "type reponse = {\n    count: number\n    entries: {\n        id: number\n        glossaryid: number\n        userid: number\n        userfullname: string\n        userpictureurl: string\n        concept: string\n        definition: string\n        definitionformat: number\n        definitiontrust: number\n        definitioninlinefiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        attachment: number\n        attachments: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        timecreated: number\n        timemodified: number\n        teacherentry: number\n        sourceglossaryid: number\n        usedynalink: number\n        casesensitive: number\n        fullmatch: number\n        approved: number\n    }[]\n    ratinginfo: {\n        contextid: number\n        component: string\n        ratingarea: string\n        canviewall: number\n        canviewany: number\n        scales: {\n            id: number\n            courseid: number\n            name: string\n            max: number\n            isnumeric: number\n            items: {\n                value: number\n                name: string\n            }[]\n        }[]\n        ratings: {\n            itemid: number\n            scaleid: number\n            userid: number\n            aggregate: double\n            aggregatestr: string\n            aggregatelabel: string\n            count: number\n            rating: number\n            canrate: number\n            canviewaggregate: number\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_glossary_get_entries_by_search",
                    "description": "Browse entries by search query.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //Glossary entry ID"
                        },
                        {
                            "title": "query",
                            "structure": "string   //The query string"
                        },
                        {
                            "title": "fullsearch",
                            "structure": "int  Default to \"1\" //The query"
                        },
                        {
                            "title": "order",
                            "structure": "string  Default to \"CONCEPT\" //Order by: 'CONCEPT', 'CREATION' or 'UPDATE'"
                        },
                        {
                            "title": "sort",
                            "structure": "string  Default to \"ASC\" //The direction of the order: 'ASC' or 'DESC'"
                        },
                        {
                            "title": "from",
                            "structure": "int  Default to \"0\" //Start returning records from here"
                        },
                        {
                            "title": "limit",
                            "structure": "int  Default to \"20\" //Number of records to return"
                        },
                        {
                            "title": "options",
                            "structure": " Default to \"Array\n(\n)\n\" //An array of optionsobject {includenotapproved int  Default to \"0\" //When false, includes the non-approved entries created by the user. When true, also includes the ones that the user has the permission to approve.}"
                        }
                    ],
                    "response": "type reponse = {\n    count: number\n    entries: {\n        id: number\n        glossaryid: number\n        userid: number\n        userfullname: string\n        userpictureurl: string\n        concept: string\n        definition: string\n        definitionformat: number\n        definitiontrust: number\n        definitioninlinefiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        attachment: number\n        attachments: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        timecreated: number\n        timemodified: number\n        teacherentry: number\n        sourceglossaryid: number\n        usedynalink: number\n        casesensitive: number\n        fullmatch: number\n        approved: number\n    }[]\n    ratinginfo: {\n        contextid: number\n        component: string\n        ratingarea: string\n        canviewall: number\n        canviewany: number\n        scales: {\n            id: number\n            courseid: number\n            name: string\n            max: number\n            isnumeric: number\n            items: {\n                value: number\n                name: string\n            }[]\n        }[]\n        ratings: {\n            itemid: number\n            scaleid: number\n            userid: number\n            aggregate: double\n            aggregatestr: string\n            aggregatelabel: string\n            count: number\n            rating: number\n            canrate: number\n            canviewaggregate: number\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_glossary_get_entries_by_term",
                    "description": "Browse entries by term (concept or alias).",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //Glossary entry ID"
                        },
                        {
                            "title": "term",
                            "structure": "string   //The entry concept, or alias"
                        },
                        {
                            "title": "from",
                            "structure": "int  Default to \"0\" //Start returning records from here"
                        },
                        {
                            "title": "limit",
                            "structure": "int  Default to \"20\" //Number of records to return"
                        },
                        {
                            "title": "options",
                            "structure": " Default to \"Array\n(\n)\n\" //An array of optionsobject {includenotapproved int  Default to \"0\" //When false, includes the non-approved entries created by the user. When true, also includes the ones that the user has the permission to approve.}"
                        }
                    ],
                    "response": "type reponse = {\n    count: number\n    entries: {\n        id: number\n        glossaryid: number\n        userid: number\n        userfullname: string\n        userpictureurl: string\n        concept: string\n        definition: string\n        definitionformat: number\n        definitiontrust: number\n        definitioninlinefiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        attachment: number\n        attachments: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        timecreated: number\n        timemodified: number\n        teacherentry: number\n        sourceglossaryid: number\n        usedynalink: number\n        casesensitive: number\n        fullmatch: number\n        approved: number\n    }[]\n    ratinginfo: {\n        contextid: number\n        component: string\n        ratingarea: string\n        canviewall: number\n        canviewany: number\n        scales: {\n            id: number\n            courseid: number\n            name: string\n            max: number\n            isnumeric: number\n            items: {\n                value: number\n                name: string\n            }[]\n        }[]\n        ratings: {\n            itemid: number\n            scaleid: number\n            userid: number\n            aggregate: double\n            aggregatestr: string\n            aggregatelabel: string\n            count: number\n            rating: number\n            canrate: number\n            canviewaggregate: number\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_glossary_get_entries_to_approve",
                    "description": "Browse entries to be approved.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //Glossary entry ID"
                        },
                        {
                            "title": "letter",
                            "structure": "string   //A letter, or either keywords: 'ALL' or 'SPECIAL'."
                        },
                        {
                            "title": "order",
                            "structure": "string  Default to \"CONCEPT\" //Order by: 'CONCEPT', 'CREATION' or 'UPDATE'"
                        },
                        {
                            "title": "sort",
                            "structure": "string  Default to \"ASC\" //The direction of the order: 'ASC' or 'DESC'"
                        },
                        {
                            "title": "from",
                            "structure": "int  Default to \"0\" //Start returning records from here"
                        },
                        {
                            "title": "limit",
                            "structure": "int  Default to \"20\" //Number of records to return"
                        },
                        {
                            "title": "options",
                            "structure": " Default to \"Array\n(\n)\n\" //An array of optionsobject {}"
                        }
                    ],
                    "response": "type reponse = {\n    count: number\n    entries: {\n        id: number\n        glossaryid: number\n        userid: number\n        userfullname: string\n        userpictureurl: string\n        concept: string\n        definition: string\n        definitionformat: number\n        definitiontrust: number\n        definitioninlinefiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        attachment: number\n        attachments: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        timecreated: number\n        timemodified: number\n        teacherentry: number\n        sourceglossaryid: number\n        usedynalink: number\n        casesensitive: number\n        fullmatch: number\n        approved: number\n    }[]\n    ratinginfo: {\n        contextid: number\n        component: string\n        ratingarea: string\n        canviewall: number\n        canviewany: number\n        scales: {\n            id: number\n            courseid: number\n            name: string\n            max: number\n            isnumeric: number\n            items: {\n                value: number\n                name: string\n            }[]\n        }[]\n        ratings: {\n            itemid: number\n            scaleid: number\n            userid: number\n            aggregate: double\n            aggregatestr: string\n            aggregatelabel: string\n            count: number\n            rating: number\n            canrate: number\n            canviewaggregate: number\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_glossary_get_entry_by_id",
                    "description": "Get an entry by ID",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //Glossary entry ID"
                        }
                    ],
                    "response": "type reponse = {\n    entry: {\n        id: number\n        glossaryid: number\n        userid: number\n        userfullname: string\n        userpictureurl: string\n        concept: string\n        definition: string\n        definitionformat: number\n        definitiontrust: number\n        definitioninlinefiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        attachment: number\n        attachments: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        timecreated: number\n        timemodified: number\n        teacherentry: number\n        sourceglossaryid: number\n        usedynalink: number\n        casesensitive: number\n        fullmatch: number\n        approved: number\n    }\n    ratinginfo: {\n        contextid: number\n        component: string\n        ratingarea: string\n        canviewall: number\n        canviewany: number\n        scales: {\n            id: number\n            courseid: number\n            name: string\n            max: number\n            isnumeric: number\n            items: {\n                value: number\n                name: string\n            }[]\n        }[]\n        ratings: {\n            itemid: number\n            scaleid: number\n            userid: number\n            aggregate: double\n            aggregatestr: string\n            aggregatelabel: string\n            count: number\n            rating: number\n            canrate: number\n            canviewaggregate: number\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_glossary_get_glossaries_by_courses",
                    "description": "Retrieve a list of glossaries from several courses.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": " Default to \"Array\n(\n)\n\" //Array of course IDslist of (int   //course id)"
                        }
                    ],
                    "response": "type reponse = {\n    glossaries: {\n        id: number\n        coursemodule: number\n        course: number\n        name: string\n        intro: string\n        introformat: number\n        introfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        allowduplicatedentries: number\n        displayformat: string\n        mainglossary: number\n        showspecial: number\n        showalphabet: number\n        showall: number\n        allowcomments: number\n        allowprintview: number\n        usedynalink: number\n        defaultapproval: number\n        approvaldisplayformat: string\n        globalglossary: number\n        entbypage: number\n        editalways: number\n        rsstype: number\n        rssarticles: number\n        assessed: number\n        assesstimestart: number\n        assesstimefinish: number\n        scale: number\n        timecreated: number\n        timemodified: number\n        completionentries: number\n        section: number\n        visible: number\n        groupmode: number\n        groupingid: number\n        browsemodes: {}[]\n        canaddentry: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "lesson": {
            "finish": [
                {
                    "title": "mod_lesson_finish_attempt",
                    "description": "Finishes the current attempt.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "lessonid",
                            "structure": "int   //Lesson instance id."
                        },
                        {
                            "title": "password",
                            "structure": "string  Default to \"\" //Optional password (the lesson may be protected)."
                        },
                        {
                            "title": "outoftime",
                            "structure": "int  Default to \"\" //If the user run out of time."
                        },
                        {
                            "title": "review",
                            "structure": "int  Default to \"\" //If we want to review just after finishing (1 hour margin)."
                        }
                    ],
                    "response": "type reponse = {\n    data: {\n        name: string\n        value: string\n        message: string\n    }[]\n    messages: {\n        message: string\n        type: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "get": [
                {
                    "title": "mod_lesson_get_content_pages_viewed",
                    "description": "Return the list of content pages viewed by a user during a lesson\n                        attempt.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "lessonid",
                            "structure": "int   //lesson instance id"
                        },
                        {
                            "title": "lessonattempt",
                            "structure": "int   //lesson attempt number"
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"null\" //the user id (empty for current user)"
                        }
                    ],
                    "response": "type reponse = {\n    pages: {\n        id: number\n        lessonid: number\n        pageid: number\n        userid: number\n        retry: number\n        flag: number\n        timeseen: number\n        nextpageid: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_lesson_get_lesson",
                    "description": "Return information of a given lesson.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "lessonid",
                            "structure": "int   //lesson instance id"
                        },
                        {
                            "title": "password",
                            "structure": "string  Default to \"\" //lesson password"
                        }
                    ],
                    "response": "type reponse = {\n    lesson: {\n        id: number\n        course: number\n        coursemodule: number\n        name: string\n        intro: string\n        introformat: number\n        practice: number\n        modattempts: number\n        usepassword: number\n        password: string\n        dependency: number\n        conditions: string\n        grade: number\n        custom: number\n        ongoing: number\n        usemaxgrade: number\n        maxanswers: number\n        maxattempts: number\n        review: number\n        nextpagedefault: number\n        feedback: number\n        minquestions: number\n        maxpages: number\n        timelimit: number\n        retake: number\n        activitylink: number\n        mediafile: string\n        mediaheight: number\n        mediawidth: number\n        mediaclose: number\n        slideshow: number\n        width: number\n        height: number\n        bgcolor: string\n        displayleft: number\n        displayleftif: number\n        progressbar: number\n        available: number\n        deadline: number\n        timemodified: number\n        completionendreached: number\n        completiontimespent: number\n        allowofflineattempts: number\n        introfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        mediafiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_lesson_get_lesson_access_information",
                    "description": "Return access information for a given lesson.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "lessonid",
                            "structure": "int   //lesson instance id"
                        }
                    ],
                    "response": "type reponse = {\n    canmanage: number\n    cangrade: number\n    canviewreports: number\n    reviewmode: number\n    attemptscount: number\n    lastpageseen: number\n    leftduringtimedsession: number\n    firstpageid: number\n    preventaccessreasons: {\n        reason: string\n        data: string\n        message: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_lesson_get_lessons_by_courses",
                    "description": "Returns a list of\n                        lessons in a provided list of courses, if no list is provided all\n                        lessons that the user can view will be returned.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": " Default to \"Array\n(\n)\n\" //Array of course idslist of (int   //course id)"
                        }
                    ],
                    "response": "type reponse = {\n    lessons: {\n        id: number\n        course: number\n        coursemodule: number\n        name: string\n        intro: string\n        introformat: number\n        practice: number\n        modattempts: number\n        usepassword: number\n        password: string\n        dependency: number\n        conditions: string\n        grade: number\n        custom: number\n        ongoing: number\n        usemaxgrade: number\n        maxanswers: number\n        maxattempts: number\n        review: number\n        nextpagedefault: number\n        feedback: number\n        minquestions: number\n        maxpages: number\n        timelimit: number\n        retake: number\n        activitylink: number\n        mediafile: string\n        mediaheight: number\n        mediawidth: number\n        mediaclose: number\n        slideshow: number\n        width: number\n        height: number\n        bgcolor: string\n        displayleft: number\n        displayleftif: number\n        progressbar: number\n        available: number\n        deadline: number\n        timemodified: number\n        completionendreached: number\n        completiontimespent: number\n        allowofflineattempts: number\n        introfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        mediafiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_lesson_get_page_data",
                    "description": "Return information of a given page, including its contents.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "lessonid",
                            "structure": "int   //lesson instance id"
                        },
                        {
                            "title": "pageid",
                            "structure": "int   //the page id"
                        },
                        {
                            "title": "password",
                            "structure": "string  Default to \"\" //optional password (the lesson may be protected)"
                        },
                        {
                            "title": "review",
                            "structure": "int  Default to \"\" //if we want to review just after finishing (1 hour margin)"
                        },
                        {
                            "title": "returncontents",
                            "structure": "int  Default to \"\" //if we must return the complete page contents once rendered"
                        }
                    ],
                    "response": "type reponse = {\n    page: {\n        id: number\n        lessonid: number\n        prevpageid: number\n        nextpageid: number\n        qtype: number\n        qoption: number\n        layout: number\n        display: number\n        timecreated: number\n        timemodified: number\n        title: string\n        contents: string\n        contentsformat: number\n        displayinmenublock: number\n        type: number\n        typeid: number\n        typestring: string\n    }\n    newpageid: number\n    pagecontent: string\n    ongoingscore: string\n    progress: number\n    contentfiles: {\n        filename: string\n        filepath: string\n        filesize: number\n        fileurl: string\n        timemodified: number\n        mimetype: string\n        isexternalfile: number\n        repositorytype: string\n    }[]\n    answers: {\n        id: number\n        answerfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        responsefiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        jumpto: number\n        grade: number\n        score: number\n        flags: number\n        timecreated: number\n        timemodified: number\n        answer: string\n        answerformat: number\n        response: string\n        responseformat: number\n    }[]\n    messages: {\n        message: string\n        type: string\n    }[]\n    displaymenu: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_lesson_get_pages",
                    "description": "Return the list of pages in a lesson (based on the user\n                        permissions).",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "lessonid",
                            "structure": "int   //lesson instance id"
                        },
                        {
                            "title": "password",
                            "structure": "string  Default to \"\" //optional password (the lesson may be protected)"
                        }
                    ],
                    "response": "type reponse = {\n    pages: {\n        page: {\n            id: number\n            lessonid: number\n            prevpageid: number\n            nextpageid: number\n            qtype: number\n            qoption: number\n            layout: number\n            display: number\n            timecreated: number\n            timemodified: number\n            title: string\n            contents: string\n            contentsformat: number\n            displayinmenublock: number\n            type: number\n            typeid: number\n            typestring: string\n        }\n        answerids: {}[]\n        jumps: {}[]\n        filescount: number\n        filessizetotal: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_lesson_get_pages_possible_jumps",
                    "description": "Return all the possible jumps for the pages in a given lesson.\n                    ",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "lessonid",
                            "structure": "int   //lesson instance id"
                        }
                    ],
                    "response": "type reponse = {\n    jumps: {\n        pageid: number\n        answerid: number\n        jumpto: number\n        calculatedjump: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_lesson_get_questions_attempts",
                    "description": "Return the list of questions attempts in a given lesson.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "lessonid",
                            "structure": "int   //lesson instance id"
                        },
                        {
                            "title": "attempt",
                            "structure": "int   //lesson attempt number"
                        },
                        {
                            "title": "correct",
                            "structure": "int  Default to \"\" //only fetch correct attempts"
                        },
                        {
                            "title": "pageid",
                            "structure": "int  Default to \"null\" //only fetch attempts at the given page"
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"null\" //only fetch attempts of the given user"
                        }
                    ],
                    "response": "type reponse = {\n    attempts: {\n        id: number\n        lessonid: number\n        pageid: number\n        userid: number\n        answerid: number\n        retry: number\n        correct: number\n        useranswer: string\n        timeseen: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_lesson_get_user_attempt",
                    "description": "Return information about the given user attempt (including\n                        answers).",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "lessonid",
                            "structure": "int   //Lesson instance id."
                        },
                        {
                            "title": "userid",
                            "structure": "int   //The user id. 0 for current user."
                        },
                        {
                            "title": "lessonattempt",
                            "structure": "int   //The attempt number."
                        }
                    ],
                    "response": "type reponse = {\n    answerpages: {\n        page: {\n            id: number\n            lessonid: number\n            prevpageid: number\n            nextpageid: number\n            qtype: number\n            qoption: number\n            layout: number\n            display: number\n            timecreated: number\n            timemodified: number\n            title: string\n            contents: string\n            contentsformat: number\n            displayinmenublock: number\n            type: number\n            typeid: number\n            typestring: string\n        }\n        title: string\n        contents: string\n        qtype: string\n        grayout: number\n        answerdata: {\n            score: string\n            response: string\n            responseformat: number\n            answers: {}[]\n        }\n    }[]\n    userstats: {\n        grade: double\n        completed: number\n        timetotake: number\n        gradeinfo: {\n            nquestions: number\n            attempts: number\n            total: double\n            earned: double\n            grade: double\n            nmanual: number\n            manualpoints: double\n        }\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_lesson_get_user_attempt_grade",
                    "description": "Return grade information in the attempt for a given user.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "lessonid",
                            "structure": "int   //lesson instance id"
                        },
                        {
                            "title": "lessonattempt",
                            "structure": "int   //lesson attempt number"
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"null\" //the user id (empty for current user)"
                        }
                    ],
                    "response": "type reponse = {\n    grade: {\n        nquestions: number\n        attempts: number\n        total: double\n        earned: double\n        grade: double\n        nmanual: number\n        manualpoints: double\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_lesson_get_user_grade",
                    "description": "Return the final grade in the lesson for the given user.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "lessonid",
                            "structure": "int   //lesson instance id"
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"null\" //the user id (empty for current user)"
                        }
                    ],
                    "response": "type reponse = {\n    grade: double\n    formattedgrade: string\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_lesson_get_user_timers",
                    "description": "Return the timers in the current lesson for the given user.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "lessonid",
                            "structure": "int   //lesson instance id"
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"null\" //the user id (empty for current user)"
                        }
                    ],
                    "response": "type reponse = {\n    timers: {\n        id: number\n        lessonid: number\n        userid: number\n        starttime: number\n        lessontime: number\n        completed: number\n        timemodifiedoffline: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "lti": {
            "create": [
                {
                    "title": "mod_lti_create_tool_proxy",
                    "description": "Create a tool proxy",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "name",
                            "structure": "string  Default to \"\" //Tool proxy name"
                        },
                        {
                            "title": "regurl",
                            "structure": "string   //Tool proxy registration URL"
                        },
                        {
                            "title": "capabilityoffered",
                            "structure": " Default to \"Array\n(\n)\n\" //Array of capabilitieslist of (string   //Tool proxy capabilities offered)"
                        },
                        {
                            "title": "serviceoffered",
                            "structure": " Default to \"Array\n(\n)\n\" //Array of serviceslist of (string   //Tool proxy services offered)"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    name: string\n    regurl: string\n    state: number\n    guid: string\n    secret: string\n    vendorcode: string\n    capabilityoffered: string\n    serviceoffered: string\n    toolproxy: string\n    timecreated: number\n    timemodified: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_lti_create_tool_type",
                    "description": "Create a tool type",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "cartridgeurl",
                            "structure": "string  Default to \"\" //URL to cardridge to load tool information"
                        },
                        {
                            "title": "key",
                            "structure": "string  Default to \"\" //Consumer key"
                        },
                        {
                            "title": "secret",
                            "structure": "string  Default to \"\" //Shared secret"
                        }
                    ],
                    "response": "General structure\n  //Toolobject {id int   //Tool type idname string   //Tool type namedescription string   //Tool type descriptionurls object {icon string   //Tool type icon URLedit string   //Tool type edit URLcourse string  Optional //Tool type edit URL}state object {text string   //Tool type state name stringpending int   //Is the state pendingconfigured int   //Is the state configuredrejected int   //Is the state rejectedunknown int   //Is the state unknown}hascapabilitygroups int   //Indicate if capabilitygroups is populatedcapabilitygroups  Default to \"Array\n(\n)\n\" //Array of capability groupslist of (string   //Tool type capability groups enabled)courseid int  Default to \"0\" //Tool type courseinstanceids  Default to \"Array\n(\n)\n\" //IDs for the LTI instances using this typelist of (int   //LTI instance ID)instancecount int   //The number of times this tool is being used}",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "get": [
                {
                    "title": "mod_lti_get_ltis_by_courses",
                    "description": "Returns a list of\n                        external tool instances in a provided set of courses, if no courses are\n                        provided then all the external tool instances the user has access to\n                        will be returned.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": " Default to \"Array\n(\n)\n\" //Array of course idslist of (int   //course id)"
                        }
                    ],
                    "response": "type reponse = {\n    ltis: {\n        id: number\n        coursemodule: number\n        course: number\n        name: string\n        intro: string\n        introformat: number\n        introfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        timecreated: number\n        timemodified: number\n        typeid: number\n        toolurl: string\n        securetoolurl: string\n        instructorchoicesendname: string\n        instructorchoicesendemailaddr: number\n        instructorchoiceallowroster: number\n        instructorchoiceallowsetting: number\n        instructorcustomparameters: string\n        instructorchoiceacceptgrades: number\n        grade: number\n        launchcontainer: number\n        resourcekey: string\n        password: string\n        debuglaunch: number\n        showtitlelaunch: number\n        showdescriptionlaunch: number\n        servicesalt: string\n        icon: string\n        secureicon: string\n        section: number\n        visible: number\n        groupmode: number\n        groupingid: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_lti_get_tool_launch_data",
                    "description": "Return the launch data for a given external tool.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "toolid",
                            "structure": "int   //external tool instance id"
                        }
                    ],
                    "response": "type reponse = {\n    endpoint: string\n    parameters: {\n        name: string\n        value: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_lti_get_tool_proxies",
                    "description": "Get a list of the tool proxies",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "orphanedonly",
                            "structure": "int  Default to \"0\" //Orphaned tool types only"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    name: string\n    description: string\n    urls: {\n        icon: string\n        edit: string\n        course: string\n    }\n    state: {\n        text: string\n        pending: number\n        configured: number\n        rejected: number\n        unknown: number\n    }\n    hascapabilitygroups: number\n    capabilitygroups: {}[]\n    courseid: number\n    instanceids: {}[]\n    instancecount: number\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_lti_get_tool_proxy_registration_request",
                    "description": "Get a registration request for a tool proxy",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //Tool proxy id"
                        }
                    ],
                    "response": "type reponse = {\n    lti_message_type: string\n    lti_version: string\n    reg_key: string\n    reg_password: string\n    reg_url: string\n    tc_profile_url: string\n    launch_presentation_return_url: string\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_lti_get_tool_types",
                    "description": "Get a list of the tool types",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "toolproxyid",
                            "structure": "int  Default to \"0\" //Tool proxy id"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    name: string\n    description: string\n    urls: {\n        icon: string\n        edit: string\n        course: string\n    }\n    state: {\n        text: string\n        pending: number\n        configured: number\n        rejected: number\n        unknown: number\n    }\n    hascapabilitygroups: number\n    capabilitygroups: {}[]\n    courseid: number\n    instanceids: {}[]\n    instancecount: number\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "view": [
                {
                    "title": "mod_lti_view_lti",
                    "description": "Trigger the course module viewed event and update the module\n                        completion status.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "ltiid",
                            "structure": "int   //lti instance id"
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "quiz": {
            "get": [
                {
                    "title": "mod_quiz_get_attempt_access_information",
                    "description": "Return access information for a given attempt in a quiz.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "quizid",
                            "structure": "int   //quiz instance id"
                        },
                        {
                            "title": "attemptid",
                            "structure": "int  Default to \"0\" //attempt id, 0 for the user last attempt if exists"
                        }
                    ],
                    "response": "type reponse = {\n    endtime: number\n    isfinished: number\n    ispreflightcheckrequired: number\n    preventnewattemptreasons: {}[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_quiz_get_attempt_data",
                    "description": "Returns information for the given attempt page for a quiz attempt\n                        in progress.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "attemptid",
                            "structure": "int   //attempt id"
                        },
                        {
                            "title": "page",
                            "structure": "int   //page number"
                        },
                        {
                            "title": "preflightdata",
                            "structure": " Default to \"Array\n(\n)\n\" //Preflight required data (like passwords)list of (object {name string   //data namevalue string   //data value})"
                        }
                    ],
                    "response": "type reponse = {\n    attempt: {\n        id: number\n        quiz: number\n        userid: number\n        attempt: number\n        uniqueid: number\n        layout: string\n        currentpage: number\n        preview: number\n        state: string\n        timestart: number\n        timefinish: number\n        timemodified: number\n        timemodifiedoffline: number\n        timecheckstate: number\n        sumgrades: double\n    }\n    messages: {}[]\n    nextpage: number\n    questions: {\n        slot: number\n        type: string\n        page: number\n        html: string\n        sequencecheck: number\n        lastactiontime: number\n        hasautosavedstep: number\n        flagged: number\n        number: number\n        state: string\n        status: string\n        blockedbyprevious: number\n        mark: string\n        maxmark: double\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_quiz_get_attempt_review",
                    "description": "Returns review information for the given finished attempt, can be\n                        used by users or teachers.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "attemptid",
                            "structure": "int   //attempt id"
                        },
                        {
                            "title": "page",
                            "structure": "int  Default to \"-1\" //page number, empty for all the questions in all the pages"
                        }
                    ],
                    "response": "type reponse = {\n    grade: string\n    attempt: {\n        id: number\n        quiz: number\n        userid: number\n        attempt: number\n        uniqueid: number\n        layout: string\n        currentpage: number\n        preview: number\n        state: string\n        timestart: number\n        timefinish: number\n        timemodified: number\n        timemodifiedoffline: number\n        timecheckstate: number\n        sumgrades: double\n    }\n    additionaldata: {\n        id: string\n        title: string\n        content: string\n    }[]\n    questions: {\n        slot: number\n        type: string\n        page: number\n        html: string\n        sequencecheck: number\n        lastactiontime: number\n        hasautosavedstep: number\n        flagged: number\n        number: number\n        state: string\n        status: string\n        blockedbyprevious: number\n        mark: string\n        maxmark: double\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_quiz_get_attempt_summary",
                    "description": "Returns a summary of a quiz attempt before it is submitted.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "attemptid",
                            "structure": "                  General structure\n                                    int\n                                    \n                                        //attempt id\n                                    \n                                "
                        },
                        {
                            "title": "preflightdata",
                            "structure": " Default to \"Array\n(\n)\n\" //Preflight required data (like passwords)list of (object {name string   //data namevalue string   //data value})"
                        }
                    ],
                    "response": "type reponse = {\n    questions: {\n        slot: number\n        type: string\n        page: number\n        html: string\n        sequencecheck: number\n        lastactiontime: number\n        hasautosavedstep: number\n        flagged: number\n        number: number\n        state: string\n        status: string\n        blockedbyprevious: number\n        mark: string\n        maxmark: double\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_quiz_get_combined_review_options",
                    "description": "Combines the review options from a number of different quiz\n                        attempts.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "quizid",
                            "structure": "int   //quiz instance id"
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //user id (empty for current user)"
                        }
                    ],
                    "response": "type reponse = {\n    someoptions: {\n        name: string\n        value: number\n    }[]\n    alloptions: {\n        name: string\n        value: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_quiz_get_quiz_access_information",
                    "description": "Return access information for a given quiz.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "quizid",
                            "structure": "int   //quiz instance id"
                        }
                    ],
                    "response": "type reponse = {\n    canattempt: number\n    canmanage: number\n    canpreview: number\n    canreviewmyattempts: number\n    canviewreports: number\n    accessrules: {}[]\n    activerulenames: {}[]\n    preventaccessreasons: {}[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_quiz_get_quiz_feedback_for_grade",
                    "description": "Get the feedback text that should be show to a student who got the\n                        given grade in the given quiz.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "quizid",
                            "structure": "int   //quiz instance id"
                        },
                        {
                            "title": "grade",
                            "structure": "double   //the grade to check"
                        }
                    ],
                    "response": "type reponse = {\n    feedbacktext: string\n    feedbacktextformat: number\n    feedbackinlinefiles: {\n        filename: string\n        filepath: string\n        filesize: number\n        fileurl: string\n        timemodified: number\n        mimetype: string\n        isexternalfile: number\n        repositorytype: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_quiz_get_quiz_required_qtypes",
                    "description": "Return the potential question types that would be required for a\n                        given quiz.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "quizid",
                            "structure": "int   //quiz instance id"
                        }
                    ],
                    "response": "type reponse = {\n    questiontypes: {}[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_quiz_get_quizzes_by_courses",
                    "description": "Returns a list of\n                        quizzes in a provided list of courses, if no list is provided all\n                        quizzes that the user can view will be returned.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": " Default to \"Array\n(\n)\n\" //Array of course idslist of (int   //course id)"
                        }
                    ],
                    "response": "type reponse = {\n    quizzes: {\n        id: number\n        course: number\n        coursemodule: number\n        name: string\n        intro: string\n        introformat: number\n        introfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        timeopen: number\n        timeclose: number\n        timelimit: number\n        overduehandling: string\n        graceperiod: number\n        preferredbehaviour: string\n        canredoquestions: number\n        attempts: number\n        attemptonlast: number\n        grademethod: number\n        decimalpoints: number\n        questiondecimalpoints: number\n        reviewattempt: number\n        reviewcorrectness: number\n        reviewmarks: number\n        reviewspecificfeedback: number\n        reviewgeneralfeedback: number\n        reviewrightanswer: number\n        reviewoverallfeedback: number\n        questionsperpage: number\n        navmethod: string\n        shuffleanswers: number\n        sumgrades: double\n        grade: double\n        timecreated: number\n        timemodified: number\n        password: string\n        subnet: string\n        browsersecurity: string\n        delay1: number\n        delay2: number\n        showuserpicture: number\n        showblocks: number\n        completionattemptsexhausted: number\n        completionpass: number\n        allowofflineattempts: number\n        autosaveperiod: number\n        hasfeedback: number\n        hasquestions: number\n        section: number\n        visible: number\n        groupmode: number\n        groupingid: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_quiz_get_user_attempts",
                    "description": "Return a list of attempts for the given quiz and user.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "quizid",
                            "structure": "int   //quiz instance id"
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //user id, empty for current user"
                        },
                        {
                            "title": "status",
                            "structure": "string  Default to \"finished\" //quiz status: all, finished or unfinished"
                        },
                        {
                            "title": "includepreviews",
                            "structure": "int  Default to \"\" //whether to include previews or not"
                        }
                    ],
                    "response": "type reponse = {\n    attempts: {\n        id: number\n        quiz: number\n        userid: number\n        attempt: number\n        uniqueid: number\n        layout: string\n        currentpage: number\n        preview: number\n        state: string\n        timestart: number\n        timefinish: number\n        timemodified: number\n        timemodifiedoffline: number\n        timecheckstate: number\n        sumgrades: double\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_quiz_get_user_best_grade",
                    "description": "Get the best current grade for the given user on a quiz.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "quizid",
                            "structure": "int   //quiz instance id"
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //user id"
                        }
                    ],
                    "response": "type reponse = {\n    hasgrade: number\n    grade: double\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "start": [
                {
                    "title": "mod_quiz_start_attempt",
                    "description": "Starts a new attempt at a quiz.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "quizid",
                            "structure": "int   //quiz instance id"
                        },
                        {
                            "title": "preflightdata",
                            "structure": " Default to \"Array\n(\n)\n\" //Preflight required data (like passwords)list of (object {name string   //data namevalue string   //data value})"
                        },
                        {
                            "title": "forcenew",
                            "structure": "int  Default to \"\" //Whether to force a new attempt or not."
                        }
                    ],
                    "response": "type reponse = {\n    attempt: {\n        id: number\n        quiz: number\n        userid: number\n        attempt: number\n        uniqueid: number\n        layout: string\n        currentpage: number\n        preview: number\n        state: string\n        timestart: number\n        timefinish: number\n        timemodified: number\n        timemodifiedoffline: number\n        timecheckstate: number\n        sumgrades: double\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "view": [
                {
                    "title": "mod_quiz_view_attempt",
                    "description": "Trigger the attempt viewed event.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "attemptid",
                            "structure": "int   //attempt id"
                        },
                        {
                            "title": "page",
                            "structure": "int   //page number"
                        },
                        {
                            "title": "preflightdata",
                            "structure": " Default to \"Array\n(\n)\n\" //Preflight required data (like passwords)list of (object {name string   //data namevalue string   //data value})"
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_quiz_view_attempt_review",
                    "description": "Trigger the attempt reviewed event.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "attemptid",
                            "structure": "int   //attempt id"
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_quiz_view_attempt_summary",
                    "description": "Trigger the attempt summary viewed event.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "attemptid",
                            "structure": "int   //attempt id"
                        },
                        {
                            "title": "preflightdata",
                            "structure": " Default to \"Array\n(\n)\n\" //Preflight required data (like passwords)list of (object {name string   //data namevalue string   //data value})"
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_quiz_view_quiz",
                    "description": "Trigger the course module viewed event and update the module\n                        completion status.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "quizid",
                            "structure": "int   //quiz instance id"
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "scorm": {
            "get": [
                {
                    "title": "mod_scorm_get_scorm_attempt_count",
                    "description": "Return the number of attempts done by a user in the given SCORM.\n                    ",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "scormid",
                            "structure": "int   //SCORM instance id"
                        },
                        {
                            "title": "userid",
                            "structure": "int   //User id"
                        },
                        {
                            "title": "ignoremissingcompletion",
                            "structure": "int  Default to \"\" //Ignores attempts that haven't reported a grade/completion"
                        }
                    ],
                    "response": "type reponse = {\n    attemptscount: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_scorm_get_scorm_sco_tracks",
                    "description": "Retrieves SCO tracking data for the given user id and attempt\n                        number",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "scoid",
                            "structure": "int   //sco id"
                        },
                        {
                            "title": "userid",
                            "structure": "int   //user id"
                        },
                        {
                            "title": "attempt",
                            "structure": "int  Default to \"0\" //attempt number (0 for last attempt)"
                        }
                    ],
                    "response": "type reponse = {\n    data: {\n        attempt: number\n        tracks: {\n            element: string\n            value: string\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_scorm_get_scorm_scoes",
                    "description": "Returns a list containing all the scoes data related to the given\n                        scorm id",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "scormid",
                            "structure": "int   //scorm instance id"
                        },
                        {
                            "title": "organization",
                            "structure": "string  Default to \"\" //organization id"
                        }
                    ],
                    "response": "type reponse = {\n    scoes: {\n        id: number\n        scorm: number\n        manifest: string\n        organization: string\n        parent: string\n        identifier: string\n        launch: string\n        scormtype: string\n        title: string\n        sortorder: number\n        extradata: {\n            element: string\n            value: string\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_scorm_get_scorm_user_data",
                    "description": "Retrieves user tracking and SCO data and default SCORM values",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "scormid",
                            "structure": "int   //scorm instance id"
                        },
                        {
                            "title": "attempt",
                            "structure": "int   //attempt number"
                        }
                    ],
                    "response": "type reponse = {\n    data: {\n        scoid: number\n        userdata: {\n            element: string\n            value: string\n        }[]\n        defaultdata: {\n            element: string\n            value: string\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_scorm_get_scorms_by_courses",
                    "description": "Returns a list of\n                        scorm instances in a provided set of courses, if no courses are provided\n                        then all the scorm instances the user has access to will be returned.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": " Default to \"Array\n(\n)\n\" //Array of course idslist of (int   //course id)"
                        }
                    ],
                    "response": "type reponse = {\n    scorms: {\n        id: number\n        coursemodule: number\n        course: number\n        name: string\n        intro: string\n        introformat: number\n        introfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        packagesize: number\n        packageurl: string\n        version: string\n        maxgrade: number\n        grademethod: number\n        whatgrade: number\n        maxattempt: number\n        forcecompleted: number\n        forcenewattempt: number\n        lastattemptlock: number\n        displayattemptstatus: number\n        displaycoursestructure: number\n        sha1hash: string\n        md5hash: string\n        revision: number\n        launch: number\n        skipview: number\n        hidebrowse: number\n        hidetoc: number\n        nav: number\n        navpositionleft: number\n        navpositiontop: number\n        auto: number\n        popup: number\n        width: number\n        height: number\n        timeopen: number\n        timeclose: number\n        displayactivityname: number\n        scormtype: string\n        reference: string\n        protectpackagedownloads: number\n        updatefreq: number\n        options: string\n        completionstatusrequired: number\n        completionscorerequired: number\n        completionstatusallscos: number\n        autocommit: number\n        timemodified: number\n        section: number\n        visible: number\n        groupmode: number\n        groupingid: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "view": [
                {
                    "title": "mod_scorm_view_scorm",
                    "description": "Trigger the course module viewed event.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "scormid",
                            "structure": "int   //scorm instance id"
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "url": {
            "get": [
                {
                    "title": "mod_url_get_urls_by_courses",
                    "description": "Returns a list of urls in a provided list of courses, if no list is\n                        provided all urls that the user can view will be returned.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": " Default to \"Array\n(\n)\n\" //Array of course idslist of (int   //Course id)"
                        }
                    ],
                    "response": "type reponse = {\n    urls: {\n        id: number\n        coursemodule: number\n        course: number\n        name: string\n        intro: string\n        introformat: number\n        introfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        externalurl: string\n        display: number\n        displayoptions: string\n        parameters: string\n        timemodified: number\n        section: number\n        visible: number\n        groupmode: number\n        groupingid: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "wiki": {
            "edit": [
                {
                    "title": "mod_wiki_edit_page",
                    "description": "Save the contents of a page.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "pageid",
                            "structure": "int   //Page ID."
                        },
                        {
                            "title": "content",
                            "structure": "string   //Page contents."
                        },
                        {
                            "title": "section",
                            "structure": "string  Default to \"null\" //Section page title."
                        }
                    ],
                    "response": "type reponse = {\n    pageid: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "get": [
                {
                    "title": "mod_wiki_get_page_for_editing",
                    "description": "Locks and retrieves info of page-section to be edited.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "pageid",
                            "structure": "int   //Page ID to edit."
                        },
                        {
                            "title": "section",
                            "structure": "string  Default to \"null\" //Section page title."
                        },
                        {
                            "title": "lockonly",
                            "structure": "int  Default to \"\" //Just renew lock and not return content."
                        }
                    ],
                    "response": "type reponse = {\n    pagesection: {\n        content: string\n        contentformat: string\n        version: number\n        warnings: {\n            item: string\n            itemid: number\n            warningcode: string\n            message: string\n        }[]\n    }\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_wiki_get_subwiki_files",
                    "description": "Returns the list of files for a specific subwiki.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "wikiid",
                            "structure": "int   //Wiki instance ID."
                        },
                        {
                            "title": "groupid",
                            "structure": "int  Default to \"-1\" //Subwiki's group ID, -1 means current group. It will be ignored if the wiki doesn't use groups."
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //Subwiki's user ID, 0 means current user. It will be ignored in collaborative wikis."
                        }
                    ],
                    "response": "type reponse = {\n    files: {\n        filename: string\n        filepath: string\n        filesize: number\n        fileurl: string\n        timemodified: number\n        mimetype: string\n        isexternalfile: number\n        repositorytype: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_wiki_get_subwiki_pages",
                    "description": "Returns the list of pages for a specific subwiki.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "wikiid",
                            "structure": "int   //Wiki instance ID."
                        },
                        {
                            "title": "groupid",
                            "structure": "int  Default to \"-1\" //Subwiki's group ID, -1 means current group. It will be ignored if the wiki doesn't use groups."
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //Subwiki's user ID, 0 means current user. It will be ignored in collaborative wikis."
                        },
                        {
                            "title": "options",
                            "structure": " Default to \"Array\n(\n)\n\" //Optionsobject {sortby string  Default to \"title\" //Field to sort by (id, title, ...).sortdirection string  Default to \"ASC\" //Sort direction: ASC or DESC.includecontent int  Default to \"1\" //Include each page contents or just the contents size.}"
                        }
                    ],
                    "response": "type reponse = {\n    pages: {\n        id: number\n        subwikiid: number\n        title: string\n        timecreated: number\n        timemodified: number\n        timerendered: number\n        userid: number\n        pageviews: number\n        readonly: number\n        caneditpage: number\n        firstpage: number\n        cachedcontent: string\n        contentformat: number\n        contentsize: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_wiki_get_subwikis",
                    "description": "Returns the list of subwikis the user can see in a specific wiki.\n                    ",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "wikiid",
                            "structure": "int   //Wiki instance ID."
                        }
                    ],
                    "response": "type reponse = {\n    subwikis: {\n        id: number\n        wikiid: number\n        groupid: string\n        userid: number\n        canedit: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_wiki_get_wikis_by_courses",
                    "description": "Returns a list of\n                        wiki instances in a provided set of courses, if no courses are provided\n                        then all the wiki instances the user has access to will be returned.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": " Default to \"Array\n(\n)\n\" //Array of course ids.list of (int   //Course ID)"
                        }
                    ],
                    "response": "type reponse = {\n    wikis: {\n        id: number\n        coursemodule: number\n        course: number\n        name: string\n        intro: string\n        introformat: number\n        introfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        timecreated: number\n        timemodified: number\n        firstpagetitle: string\n        wikimode: string\n        defaultformat: string\n        forceformat: number\n        editbegin: number\n        editend: number\n        section: number\n        visible: number\n        groupmode: number\n        groupingid: number\n        cancreatepages: number\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "workshop": {
            "add": [
                {
                    "title": "mod_workshop_add_submission",
                    "description": "Add a new submission to a given workshop.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "workshopid",
                            "structure": "int   //Workshop id"
                        },
                        {
                            "title": "title",
                            "structure": "string   //Submission title"
                        },
                        {
                            "title": "content",
                            "structure": "string  Default to \"\" //Submission text content"
                        },
                        {
                            "title": "contentformat",
                            "structure": "int  Default to \"0\" //The format used for the content"
                        },
                        {
                            "title": "inlineattachmentsid",
                            "structure": "int  Default to \"0\" //The draft file area id for inline attachments in the content"
                        },
                        {
                            "title": "attachmentsid",
                            "structure": "int  Default to \"0\" //The draft file area id for attachments"
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n    submissionid: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "evaluate": [
                {
                    "title": "mod_workshop_evaluate_assessment",
                    "description": "Evaluates an assessment (used by teachers for provide feedback to\n                        the reviewer).",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "assessmentid",
                            "structure": "int   //Assessment id."
                        },
                        {
                            "title": "feedbacktext",
                            "structure": "string  Default to \"\" //The feedback for the reviewer."
                        },
                        {
                            "title": "feedbackformat",
                            "structure": "int  Default to \"0\" //The feedback format for text."
                        },
                        {
                            "title": "weight",
                            "structure": "int  Default to \"1\" //The new weight for the assessment."
                        },
                        {
                            "title": "gradinggradeover",
                            "structure": "string  Default to \"\" //The new grading grade."
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_workshop_evaluate_submission",
                    "description": "Evaluates a submission (used by teachers for provide feedback or\n                        override the submission grade).",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "submissionid",
                            "structure": "int   //submission id."
                        },
                        {
                            "title": "feedbacktext",
                            "structure": "string  Default to \"\" //The feedback for the author."
                        },
                        {
                            "title": "feedbackformat",
                            "structure": "int  Default to \"0\" //The feedback format for text."
                        },
                        {
                            "title": "published",
                            "structure": "int  Default to \"\" //Publish the submission for others?."
                        },
                        {
                            "title": "gradeover",
                            "structure": "string  Default to \"\" //The new submission grade."
                        }
                    ],
                    "response": "type reponse = {\n    status: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "get": [
                {
                    "title": "mod_workshop_get_assessment_form_definition",
                    "description": "Retrieves the assessment form definition.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "assessmentid",
                            "structure": "int   //Assessment id"
                        },
                        {
                            "title": "mode",
                            "structure": "string  Default to \"assessment\" //The form mode (assessment or preview)"
                        }
                    ],
                    "response": "type reponse = {\n    dimenssionscount: number\n    descriptionfiles: {\n        filename: string\n        filepath: string\n        filesize: number\n        fileurl: string\n        timemodified: number\n        mimetype: string\n        isexternalfile: number\n        repositorytype: string\n    }[]\n    options: {\n        name: string\n        value: string\n    }[]\n    fields: {\n        name: string\n        value: string\n    }[]\n    current: {\n        name: string\n        value: string\n    }[]\n    dimensionsinfo: {\n        id: number\n        min: double\n        max: double\n        weight: string\n        scale: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_workshop_get_grades",
                    "description": "Returns the assessment and submission grade for the given user.\n                    ",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "workshopid",
                            "structure": "int   //Workshop instance id."
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //User id (empty or 0 for current user)."
                        }
                    ],
                    "response": "type reponse = {\n    assessmentrawgrade: double\n    assessmentlongstrgrade: string\n    assessmentgradehidden: number\n    submissionrawgrade: double\n    submissionlongstrgrade: string\n    submissiongradehidden: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_workshop_get_grades_report",
                    "description": "Retrieves the assessment grades report.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "workshopid",
                            "structure": "int   //Workshop instance id."
                        },
                        {
                            "title": "groupid",
                            "structure": "int  Default to \"0\" //Group id, 0 means that the function will determine the user group."
                        },
                        {
                            "title": "sortby",
                            "structure": "string  Default to \"lastname\" //sort by this element: lastname, firstname, submissiontitle,                submissionmodified, submissiongrade, gradinggrade."
                        },
                        {
                            "title": "sortdirection",
                            "structure": "string  Default to \"ASC\" //sort direction: ASC or DESC"
                        },
                        {
                            "title": "page",
                            "structure": "int  Default to \"0\" //The page of records to return."
                        },
                        {
                            "title": "perpage",
                            "structure": "int  Default to \"0\" //The number of records to return per page."
                        }
                    ],
                    "response": "type reponse = {\n    report: {\n        grades: {\n            userid: number\n            submissionid: number\n            submissiontitle: string\n            submissionmodified: number\n            submissiongrade: double\n            gradinggrade: double\n            submissiongradeover: double\n            submissiongradeoverby: number\n            submissionpublished: number\n            reviewedby: {\n                userid: number\n                assessmentid: number\n                submissionid: number\n                grade: double\n                gradinggrade: double\n                gradinggradeover: double\n                weight: number\n            }[]\n            reviewerof: {\n                userid: number\n                assessmentid: number\n                submissionid: number\n                grade: double\n                gradinggrade: double\n                gradinggradeover: double\n                weight: number\n            }[]\n        }[]\n        totalcount: number\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_workshop_get_reviewer_assessments",
                    "description": "Retrieves all the assessments reviewed by the given user.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "workshopid",
                            "structure": "int   //Workshop instance id."
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //User id who did the assessment review (empty or 0 for current user)."
                        }
                    ],
                    "response": "type reponse = {\n    assessments: {\n        id: number\n        submissionid: number\n        reviewerid: number\n        weight: number\n        timecreated: number\n        timemodified: number\n        grade: double\n        gradinggrade: double\n        gradinggradeover: double\n        gradinggradeoverby: number\n        feedbackauthor: string\n        feedbackauthorformat: number\n        feedbackauthorattachment: number\n        feedbackreviewer: string\n        feedbackreviewerformat: number\n        feedbackcontentfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        feedbackattachmentfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_workshop_get_submission",
                    "description": "Retrieves the given submission.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "submissionid",
                            "structure": "int   //Submission id"
                        }
                    ],
                    "response": "type reponse = {\n    submission: {\n        id: number\n        workshopid: number\n        example: number\n        authorid: number\n        timecreated: number\n        timemodified: number\n        title: string\n        content: string\n        contentformat: number\n        contenttrust: number\n        attachment: number\n        grade: double\n        gradeover: double\n        gradeoverby: number\n        feedbackauthor: string\n        feedbackauthorformat: number\n        timegraded: number\n        published: number\n        late: number\n        contentfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        attachmentfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_workshop_get_submission_assessments",
                    "description": "Retrieves all the assessments of the given submission.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "submissionid",
                            "structure": "int   //Submission id"
                        }
                    ],
                    "response": "type reponse = {\n    assessments: {\n        id: number\n        submissionid: number\n        reviewerid: number\n        weight: number\n        timecreated: number\n        timemodified: number\n        grade: double\n        gradinggrade: double\n        gradinggradeover: double\n        gradinggradeoverby: number\n        feedbackauthor: string\n        feedbackauthorformat: number\n        feedbackauthorattachment: number\n        feedbackreviewer: string\n        feedbackreviewerformat: number\n        feedbackcontentfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        feedbackattachmentfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_workshop_get_submissions",
                    "description": "Retrieves all the workshop submissions or the one done by the given\n                        user (except example submissions).",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "workshopid",
                            "structure": "int   //Workshop instance id."
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //Get submissions done by this user. Use 0 or empty for the current user"
                        },
                        {
                            "title": "groupid",
                            "structure": "int  Default to \"0\" //Group id, 0 means that the function will determine the user group.                                               It will return submissions done by users in the given group."
                        },
                        {
                            "title": "page",
                            "structure": "int  Default to \"0\" //The page of records to return."
                        },
                        {
                            "title": "perpage",
                            "structure": "int  Default to \"0\" //The number of records to return per page."
                        }
                    ],
                    "response": "type reponse = {\n    submissions: {\n        id: number\n        workshopid: number\n        example: number\n        authorid: number\n        timecreated: number\n        timemodified: number\n        title: string\n        content: string\n        contentformat: number\n        contenttrust: number\n        attachment: number\n        grade: double\n        gradeover: double\n        gradeoverby: number\n        feedbackauthor: string\n        feedbackauthorformat: number\n        timegraded: number\n        published: number\n        late: number\n        contentfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        attachmentfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n    }[]\n    totalcount: number\n    totalfilesize: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_workshop_get_user_plan",
                    "description": "Return the planner information for the given user.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "workshopid",
                            "structure": "int   //Workshop instance id."
                        },
                        {
                            "title": "userid",
                            "structure": "int  Default to \"0\" //User id (empty or 0 for current user)."
                        }
                    ],
                    "response": "type reponse = {\n    userplan: {\n        phases: {\n            code: number\n            title: string\n            active: number\n            tasks: {\n                code: string\n                title: string\n                link: string\n                details: string\n                completed: string\n            }[]\n            actions: {\n                type: string\n                label: string\n                url: string\n                method: string\n            }[]\n        }[]\n        examples: {\n            id: number\n            title: string\n            assessmentid: number\n            grade: double\n            gradinggrade: double\n        }[]\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_workshop_get_workshop_access_information",
                    "description": "Return access information for a given workshop.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "workshopid",
                            "structure": "int   //Workshop instance id."
                        }
                    ],
                    "response": "type reponse = {\n    creatingsubmissionallowed: number\n    modifyingsubmissionallowed: number\n    assessingallowed: number\n    assessingexamplesallowed: number\n    examplesassessedbeforesubmission: number\n    examplesassessedbeforeassessment: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n    canview: number\n    canaddinstance: number\n    canswitchphase: number\n    caneditdimensions: number\n    cansubmit: number\n    canpeerassess: number\n    canmanageexamples: number\n    canallocate: number\n    canpublishsubmissions: number\n    canviewauthornames: number\n    canviewreviewernames: number\n    canviewallsubmissions: number\n    canviewpublishedsubmissions: number\n    canviewauthorpublished: number\n    canviewallassessments: number\n    canoverridegrades: number\n    canignoredeadlines: number\n    candeletesubmissions: number\n    canexportsubmissions: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "mod_workshop_get_workshops_by_courses",
                    "description": "Returns a list of\n                        workshops in a provided list of courses, if no list is provided all\n                        workshops that the user can view will be returned.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "courseids",
                            "structure": " Default to \"Array\n(\n)\n\" //Array of course idslist of (int   //Course id)"
                        }
                    ],
                    "response": "type reponse = {\n    workshops: {\n        id: number\n        course: number\n        name: string\n        intro: string\n        introformat: number\n        instructauthors: string\n        instructauthorsformat: number\n        instructreviewers: string\n        instructreviewersformat: number\n        timemodified: number\n        phase: number\n        useexamples: number\n        usepeerassessment: number\n        useselfassessment: number\n        grade: double\n        gradinggrade: double\n        strategy: string\n        evaluation: string\n        gradedecimals: number\n        nattachments: number\n        submissionfiletypes: string\n        latesubmissions: number\n        maxbytes: number\n        examplesmode: number\n        submissionstart: number\n        submissionend: number\n        assessmentstart: number\n        assessmentend: number\n        phaseswitchassessment: number\n        conclusion: string\n        conclusionformat: number\n        overallfeedbackmode: number\n        overallfeedbackfiles: number\n        overallfeedbackfiletypes: string\n        overallfeedbackmaxbytes: number\n        coursemodule: number\n        introfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        instructauthorsfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        instructreviewersfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n        conclusionfiles: {\n            filename: string\n            filepath: string\n            filesize: number\n            fileurl: string\n            timemodified: number\n            mimetype: string\n            isexternalfile: number\n            repositorytype: string\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        }
    },
    "tool": {
        "dataprivacy": {
            "approve": [
                {
                    "title": "tool_dataprivacy_approve_data_request",
                    "description": "Approve a data request",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "requestid",
                            "structure": "int   //The request ID"
                        }
                    ],
                    "response": "type reponse = {\n    result: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "cancel": [
                {
                    "title": "tool_dataprivacy_cancel_data_request",
                    "description": "Cancel the data request made by the user",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "requestid",
                            "structure": "int   //The request ID"
                        }
                    ],
                    "response": "type reponse = {\n    result: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "create": [
                {
                    "title": "tool_dataprivacy_create_category_form",
                    "description": "Adds a data category",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "jsonformdata",
                            "structure": "string   //The data to create the category, encoded as a json array"
                        }
                    ],
                    "response": "type reponse = {\n    category: {\n        name: string\n        description: string\n        descriptionformat: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n    }\n    validationerrors: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_dataprivacy_create_purpose_form",
                    "description": "Adds a data purpose",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "jsonformdata",
                            "structure": "string   //The data to create the purpose, encoded as a json array"
                        }
                    ],
                    "response": "type reponse = {\n    purpose: {\n        name: string\n        description: string\n        descriptionformat: number\n        lawfulbases: string\n        sensitivedatareasons: string\n        retentionperiod: string\n        protected: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        formattedretentionperiod: string\n        formattedlawfulbases: {\n            name: string\n            description: string\n        }[]\n        formattedsensitivedatareasons: {\n            name: string\n            description: string\n        }[]\n        roleoverrides: string\n    }\n    validationerrors: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "deny": [
                {
                    "title": "tool_dataprivacy_deny_data_request",
                    "description": "Deny a data request",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "requestid",
                            "structure": "int   //The request ID"
                        }
                    ],
                    "response": "type reponse = {\n    result: number\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "get": [
                {
                    "title": "tool_dataprivacy_get_activity_options",
                    "description": "Fetches a list of activity options",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "nodefaults",
                            "structure": "int  Default to \"\" //Whether to fetch all activities or only those without defaults"
                        }
                    ],
                    "response": "type reponse = {\n    options: {\n        name: string\n        displayname: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_dataprivacy_get_category_options",
                    "description": "Fetches a list of data category options",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "includeinherit",
                            "structure": "int  Default to \"1\" //Include option \"Inherit\""
                        },
                        {
                            "title": "includenotset",
                            "structure": "int  Default to \"\" //Include option \"Not set\""
                        }
                    ],
                    "response": "type reponse = {\n    options: {\n        id: number\n        name: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_dataprivacy_get_data_request",
                    "description": "Fetch the details of a user's data request",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "requestid",
                            "structure": "int   //The request ID"
                        }
                    ],
                    "response": "type reponse = {\n    result: {\n        type: number\n        comments: string\n        commentsformat: number\n        userid: number\n        requestedby: number\n        status: number\n        dpo: number\n        dpocomment: string\n        dpocommentformat: number\n        creationmethod: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        foruser: {\n            id: number\n            email: string\n            idnumber: string\n            phone1: string\n            phone2: string\n            department: string\n            institution: string\n            fullname: string\n            identity: string\n            profileurl: string\n            profileimageurl: string\n            profileimageurlsmall: string\n        }\n        requestedbyuser: {\n            id: number\n            email: string\n            idnumber: string\n            phone1: string\n            phone2: string\n            department: string\n            institution: string\n            fullname: string\n            identity: string\n            profileurl: string\n            profileimageurl: string\n            profileimageurlsmall: string\n        }\n        dpouser: {\n            id: number\n            email: string\n            idnumber: string\n            phone1: string\n            phone2: string\n            department: string\n            institution: string\n            fullname: string\n            identity: string\n            profileurl: string\n            profileimageurl: string\n            profileimageurlsmall: string\n        }\n        messagehtml: string\n        typename: string\n        typenameshort: string\n        statuslabel: string\n        statuslabelclass: string\n        canreview: number\n        approvedeny: number\n        canmarkcomplete: number\n    }\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_dataprivacy_get_purpose_options",
                    "description": "Fetches a list of data storage purpose options",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "includeinherit",
                            "structure": "int  Default to \"1\" //Include option \"Inherit\""
                        },
                        {
                            "title": "includenotset",
                            "structure": "int  Default to \"\" //Include option \"Not set\""
                        }
                    ],
                    "response": "type reponse = {\n    options: {\n        id: number\n        name: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_dataprivacy_get_users",
                    "description": "Fetches a list of users",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "query",
                            "structure": "string   //The search query"
                        }
                    ],
                    "response": "type reponse = {\n    id: number\n    fullname: string\n    email: string\n}[]\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "tree": [
                {
                    "title": "tool_dataprivacy_tree_extra_branches",
                    "description": "Return branches for the context tree",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "contextid",
                            "structure": "int   //The context id to expand"
                        },
                        {
                            "title": "element",
                            "structure": "string   //The element we are interested on"
                        }
                    ],
                    "response": "type reponse = {\n    branches: {\n        text: string\n        expandcontextid: number\n        expandelement: string\n        contextid: number\n        contextlevel: number\n        expanded: number\n        branches: {\n            text: string\n            expandcontextid: number\n            expandelement: string\n            contextid: number\n            contextlevel: number\n            expanded: number\n            branches: {}[]\n        }[]\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "lp": {
            "data": [
                {
                    "title": "tool_lp_data_for_competency_frameworks_manage_page",
                    "description": "Load the data for the competency frameworks manage page template\n                    ",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "pagecontext",
                            "structure": "object {contextid int  Default to \"0\" //Context ID. Either use this value, or level and instanceid.contextlevel string  Default to \"\" //Context level. To be used with instanceid.instanceid int  Default to \"0\" //Context instance ID. To be used with level}"
                        }
                    ],
                    "response": "type reponse = {\n    competencyframeworks: {\n        shortname: string\n        idnumber: string\n        description: string\n        descriptionformat: number\n        visible: number\n        scaleid: number\n        scaleconfiguration: string\n        contextid: number\n        taxonomies: string\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        canmanage: number\n        competenciescount: number\n        contextname: string\n        contextnamenoprefix: string\n    }[]\n    pluginbaseurl: string\n    navigation: {}[]\n    pagecontextid: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_lp_data_for_competency_summary",
                    "description": "Load competency data for summary template.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "competencyid",
                            "structure": "int   //The competency id"
                        },
                        {
                            "title": "includerelated",
                            "structure": "int  Default to \"\" //Include or not related competencies"
                        },
                        {
                            "title": "includecourses",
                            "structure": "int  Default to \"\" //Include or not competency courses"
                        }
                    ],
                    "response": "type reponse = {\n    linkedcourses: {\n        id: number\n        fullname: string\n        shortname: string\n        idnumber: string\n        summary: string\n        summaryformat: number\n        startdate: number\n        enddate: number\n        fullnamedisplay: string\n        viewurl: string\n    }[]\n    relatedcompetencies: {\n        shortname: string\n        idnumber: string\n        description: string\n        descriptionformat: number\n        sortorder: number\n        parentid: number\n        path: string\n        ruleoutcome: number\n        ruletype: string\n        ruleconfig: string\n        scaleid: number\n        scaleconfiguration: string\n        competencyframeworkid: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n    }[]\n    competency: {\n        shortname: string\n        idnumber: string\n        description: string\n        descriptionformat: number\n        sortorder: number\n        parentid: number\n        path: string\n        ruleoutcome: number\n        ruletype: string\n        ruleconfig: string\n        scaleid: number\n        scaleconfiguration: string\n        competencyframeworkid: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n    }\n    framework: {\n        shortname: string\n        idnumber: string\n        description: string\n        descriptionformat: number\n        visible: number\n        scaleid: number\n        scaleconfiguration: string\n        contextid: number\n        taxonomies: string\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        canmanage: number\n        competenciescount: number\n        contextname: string\n        contextnamenoprefix: string\n    }\n    hascourses: number\n    hasrelatedcompetencies: number\n    scaleid: number\n    scaleconfiguration: string\n    taxonomyterm: string\n    comppath: {\n        ancestors: {\n            id: number\n            name: string\n            first: number\n            last: number\n            position: number\n        }[]\n        framework: {\n            id: number\n            name: string\n            first: number\n            last: number\n            position: number\n        }\n        pluginbaseurl: string\n        pagecontextid: number\n    }\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_lp_data_for_course_competencies_page",
                    "description": "Load the data for the course competencies page template.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "courseid",
                            "structure": "int   //The course id"
                        }
                    ],
                    "response": "type reponse = {\n    courseid: number\n    pagecontextid: number\n    gradableuserid: number\n    canmanagecompetencyframeworks: number\n    canmanagecoursecompetencies: number\n    canconfigurecoursecompetencies: number\n    cangradecompetencies: number\n    settings: {\n        courseid: number\n        pushratingstouserplans: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n    }\n    statistics: {\n        competencycount: number\n        proficientcompetencycount: number\n        proficientcompetencypercentage: double\n        proficientcompetencypercentageformatted: string\n        leastproficient: {\n            shortname: string\n            idnumber: string\n            description: string\n            descriptionformat: number\n            sortorder: number\n            parentid: number\n            path: string\n            ruleoutcome: number\n            ruletype: string\n            ruleconfig: string\n            scaleid: number\n            scaleconfiguration: string\n            competencyframeworkid: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n        }[]\n        leastproficientcount: number\n        canbegradedincourse: number\n        canmanagecoursecompetencies: number\n    }\n    competencies: {\n        competency: {\n            shortname: string\n            idnumber: string\n            description: string\n            descriptionformat: number\n            sortorder: number\n            parentid: number\n            path: string\n            ruleoutcome: number\n            ruletype: string\n            ruleconfig: string\n            scaleid: number\n            scaleconfiguration: string\n            competencyframeworkid: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n        }\n        coursecompetency: {\n            courseid: number\n            competencyid: number\n            sortorder: number\n            ruleoutcome: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n        }\n        coursemodules: {\n            id: number\n            name: string\n            url: string\n            iconurl: string\n        }[]\n        usercompetencycourse: {\n            userid: number\n            courseid: number\n            competencyid: number\n            proficiency: number\n            grade: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n            gradename: string\n            proficiencyname: string\n        }\n        ruleoutcomeoptions: {\n            value: number\n            text: string\n            selected: number\n        }[]\n        comppath: {\n            ancestors: {\n                id: number\n                name: string\n                first: number\n                last: number\n                position: number\n            }[]\n            framework: {\n                id: number\n                name: string\n                first: number\n                last: number\n                position: number\n            }\n            pluginbaseurl: string\n            pagecontextid: number\n        }\n    }[]\n    manageurl: string\n    pluginbaseurl: string\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_lp_data_for_plan_page",
                    "description": "Load the data for the plan page template.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "planid",
                            "structure": "int   //The plan id"
                        }
                    ],
                    "response": "type reponse = {\n    plan: {\n        name: string\n        description: string\n        descriptionformat: number\n        userid: number\n        templateid: number\n        origtemplateid: number\n        status: number\n        duedate: number\n        reviewerid: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        statusname: string\n        isbasedontemplate: number\n        canmanage: number\n        canrequestreview: number\n        canreview: number\n        canbeedited: number\n        isactive: number\n        isdraft: number\n        iscompleted: number\n        isinreview: number\n        iswaitingforreview: number\n        isreopenallowed: number\n        iscompleteallowed: number\n        isunlinkallowed: number\n        isrequestreviewallowed: number\n        iscancelreviewrequestallowed: number\n        isstartreviewallowed: number\n        isstopreviewallowed: number\n        isapproveallowed: number\n        isunapproveallowed: number\n        duedateformatted: string\n        commentarea: {\n            component: string\n            commentarea: string\n            itemid: number\n            courseid: number\n            contextid: number\n            cid: string\n            autostart: number\n            canpost: number\n            canview: number\n            count: number\n            collapsediconkey: string\n            displaytotalcount: number\n            displaycancel: number\n            fullwidth: number\n            linktext: string\n            notoggle: number\n            template: string\n            canpostorhascomments: number\n        }\n        reviewer: {\n            id: number\n            email: string\n            idnumber: string\n            phone1: string\n            phone2: string\n            department: string\n            institution: string\n            fullname: string\n            identity: string\n            profileurl: string\n            profileimageurl: string\n            profileimageurlsmall: string\n        }\n        template: {\n            shortname: string\n            description: string\n            descriptionformat: number\n            duedate: number\n            visible: number\n            contextid: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n            duedateformatted: string\n            cohortscount: number\n            planscount: number\n            canmanage: number\n            canread: number\n            contextname: string\n            contextnamenoprefix: string\n        }\n        url: string\n    }\n    contextid: number\n    pluginbaseurl: string\n    competencies: {\n        competency: {\n            shortname: string\n            idnumber: string\n            description: string\n            descriptionformat: number\n            sortorder: number\n            parentid: number\n            path: string\n            ruleoutcome: number\n            ruletype: string\n            ruleconfig: string\n            scaleid: number\n            scaleconfiguration: string\n            competencyframeworkid: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n        }\n        comppath: {\n            ancestors: {\n                id: number\n                name: string\n                first: number\n                last: number\n                position: number\n            }[]\n            framework: {\n                id: number\n                name: string\n                first: number\n                last: number\n                position: number\n            }\n            pluginbaseurl: string\n            pagecontextid: number\n        }\n        usercompetency: {\n            userid: number\n            competencyid: number\n            status: number\n            reviewerid: number\n            proficiency: number\n            grade: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n            canrequestreview: number\n            canreview: number\n            gradename: string\n            isrequestreviewallowed: number\n            iscancelreviewrequestallowed: number\n            isstartreviewallowed: number\n            isstopreviewallowed: number\n            isstatusidle: number\n            isstatusinreview: number\n            isstatuswaitingforreview: number\n            proficiencyname: string\n            reviewer: {\n                id: number\n                email: string\n                idnumber: string\n                phone1: string\n                phone2: string\n                department: string\n                institution: string\n                fullname: string\n                identity: string\n                profileurl: string\n                profileimageurl: string\n                profileimageurlsmall: string\n            }\n            statusname: string\n            url: string\n        }\n        usercompetencyplan: {\n            userid: number\n            competencyid: number\n            proficiency: number\n            grade: number\n            planid: number\n            sortorder: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n            gradename: string\n            proficiencyname: string\n        }\n    }[]\n    competencycount: number\n    proficientcompetencycount: number\n    proficientcompetencypercentage: double\n    proficientcompetencypercentageformatted: string\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_lp_data_for_plans_page",
                    "description": "Load the data for the plans page template",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int   //The user id"
                        }
                    ],
                    "response": "type reponse = {\n    userid: number\n    plans: {\n        name: string\n        description: string\n        descriptionformat: number\n        userid: number\n        templateid: number\n        origtemplateid: number\n        status: number\n        duedate: number\n        reviewerid: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        statusname: string\n        isbasedontemplate: number\n        canmanage: number\n        canrequestreview: number\n        canreview: number\n        canbeedited: number\n        isactive: number\n        isdraft: number\n        iscompleted: number\n        isinreview: number\n        iswaitingforreview: number\n        isreopenallowed: number\n        iscompleteallowed: number\n        isunlinkallowed: number\n        isrequestreviewallowed: number\n        iscancelreviewrequestallowed: number\n        isstartreviewallowed: number\n        isstopreviewallowed: number\n        isapproveallowed: number\n        isunapproveallowed: number\n        duedateformatted: string\n        commentarea: {\n            component: string\n            commentarea: string\n            itemid: number\n            courseid: number\n            contextid: number\n            cid: string\n            autostart: number\n            canpost: number\n            canview: number\n            count: number\n            collapsediconkey: string\n            displaytotalcount: number\n            displaycancel: number\n            fullwidth: number\n            linktext: string\n            notoggle: number\n            template: string\n            canpostorhascomments: number\n        }\n        reviewer: {\n            id: number\n            email: string\n            idnumber: string\n            phone1: string\n            phone2: string\n            department: string\n            institution: string\n            fullname: string\n            identity: string\n            profileurl: string\n            profileimageurl: string\n            profileimageurlsmall: string\n        }\n        template: {\n            shortname: string\n            description: string\n            descriptionformat: number\n            duedate: number\n            visible: number\n            contextid: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n            duedateformatted: string\n            cohortscount: number\n            planscount: number\n            canmanage: number\n            canread: number\n            contextname: string\n            contextnamenoprefix: string\n        }\n        url: string\n    }[]\n    pluginbaseurl: string\n    navigation: {}[]\n    canreaduserevidence: number\n    canmanageuserplans: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_lp_data_for_related_competencies_section",
                    "description": "Load the data for the related competencies template.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "competencyid",
                            "structure": "int   //The competency id"
                        }
                    ],
                    "response": "type reponse = {\n    relatedcompetencies: {\n        shortname: string\n        idnumber: string\n        description: string\n        descriptionformat: number\n        sortorder: number\n        parentid: number\n        path: string\n        ruleoutcome: number\n        ruletype: string\n        ruleconfig: string\n        scaleid: number\n        scaleconfiguration: string\n        competencyframeworkid: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n    }[]\n    showdeleterelatedaction: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_lp_data_for_template_competencies_page",
                    "description": "Load the data for the template competencies page template.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "templateid",
                            "structure": "int   //The template id"
                        },
                        {
                            "title": "pagecontext",
                            "structure": "object {contextid int  Default to \"0\" //Context ID. Either use this value, or level and instanceid.contextlevel string  Default to \"\" //Context level. To be used with instanceid.instanceid int  Default to \"0\" //Context instance ID. To be used with level}"
                        }
                    ],
                    "response": "type reponse = {\n    template: {\n        shortname: string\n        description: string\n        descriptionformat: number\n        duedate: number\n        visible: number\n        contextid: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        duedateformatted: string\n        cohortscount: number\n        planscount: number\n        canmanage: number\n        canread: number\n        contextname: string\n        contextnamenoprefix: string\n    }\n    pagecontextid: number\n    canmanagecompetencyframeworks: number\n    canmanagetemplatecompetencies: number\n    competencies: {\n        linkedcourses: {\n            id: number\n            fullname: string\n            shortname: string\n            idnumber: string\n            summary: string\n            summaryformat: number\n            startdate: number\n            enddate: number\n            fullnamedisplay: string\n            viewurl: string\n        }[]\n        relatedcompetencies: {\n            shortname: string\n            idnumber: string\n            description: string\n            descriptionformat: number\n            sortorder: number\n            parentid: number\n            path: string\n            ruleoutcome: number\n            ruletype: string\n            ruleconfig: string\n            scaleid: number\n            scaleconfiguration: string\n            competencyframeworkid: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n        }[]\n        competency: {\n            shortname: string\n            idnumber: string\n            description: string\n            descriptionformat: number\n            sortorder: number\n            parentid: number\n            path: string\n            ruleoutcome: number\n            ruletype: string\n            ruleconfig: string\n            scaleid: number\n            scaleconfiguration: string\n            competencyframeworkid: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n        }\n        framework: {\n            shortname: string\n            idnumber: string\n            description: string\n            descriptionformat: number\n            visible: number\n            scaleid: number\n            scaleconfiguration: string\n            contextid: number\n            taxonomies: string\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n            canmanage: number\n            competenciescount: number\n            contextname: string\n            contextnamenoprefix: string\n        }\n        hascourses: number\n        hasrelatedcompetencies: number\n        scaleid: number\n        scaleconfiguration: string\n        taxonomyterm: string\n        comppath: {\n            ancestors: {\n                id: number\n                name: string\n                first: number\n                last: number\n                position: number\n            }[]\n            framework: {\n                id: number\n                name: string\n                first: number\n                last: number\n                position: number\n            }\n            pluginbaseurl: string\n            pagecontextid: number\n        }\n    }[]\n    manageurl: string\n    pluginbaseurl: string\n    statistics: {\n        competencycount: number\n        unlinkedcompetencycount: number\n        plancount: number\n        completedplancount: number\n        usercompetencyplancount: number\n        proficientusercompetencyplancount: number\n        linkedcompetencypercentage: double\n        linkedcompetencypercentageformatted: string\n        linkedcompetencycount: number\n        completedplanpercentage: double\n        completedplanpercentageformatted: string\n        proficientusercompetencyplanpercentage: double\n        proficientusercompetencyplanpercentageformatted: string\n        leastproficient: {\n            shortname: string\n            idnumber: string\n            description: string\n            descriptionformat: number\n            sortorder: number\n            parentid: number\n            path: string\n            ruleoutcome: number\n            ruletype: string\n            ruleconfig: string\n            scaleid: number\n            scaleconfiguration: string\n            competencyframeworkid: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n        }[]\n        leastproficientcount: number\n    }\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_lp_data_for_templates_manage_page",
                    "description": "Load the data for the learning plan templates manage page template\n                    ",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "pagecontext",
                            "structure": "object {contextid int  Default to \"0\" //Context ID. Either use this value, or level and instanceid.contextlevel string  Default to \"\" //Context level. To be used with instanceid.instanceid int  Default to \"0\" //Context instance ID. To be used with level}"
                        }
                    ],
                    "response": "type reponse = {\n    templates: {\n        shortname: string\n        description: string\n        descriptionformat: number\n        duedate: number\n        visible: number\n        contextid: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        duedateformatted: string\n        cohortscount: number\n        planscount: number\n        canmanage: number\n        canread: number\n        contextname: string\n        contextnamenoprefix: string\n    }[]\n    pluginbaseurl: string\n    navigation: {}[]\n    pagecontextid: number\n    canmanage: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_lp_data_for_user_competency_summary",
                    "description": "Load a summary of a user competency.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int   //Data base record id for the user"
                        },
                        {
                            "title": "competencyid",
                            "structure": "int   //Data base record id for the competency"
                        }
                    ],
                    "response": "type reponse = {\n    showrelatedcompetencies: number\n    cangrade: number\n    competency: {\n        linkedcourses: {\n            id: number\n            fullname: string\n            shortname: string\n            idnumber: string\n            summary: string\n            summaryformat: number\n            startdate: number\n            enddate: number\n            fullnamedisplay: string\n            viewurl: string\n        }[]\n        relatedcompetencies: {\n            shortname: string\n            idnumber: string\n            description: string\n            descriptionformat: number\n            sortorder: number\n            parentid: number\n            path: string\n            ruleoutcome: number\n            ruletype: string\n            ruleconfig: string\n            scaleid: number\n            scaleconfiguration: string\n            competencyframeworkid: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n        }[]\n        competency: {\n            shortname: string\n            idnumber: string\n            description: string\n            descriptionformat: number\n            sortorder: number\n            parentid: number\n            path: string\n            ruleoutcome: number\n            ruletype: string\n            ruleconfig: string\n            scaleid: number\n            scaleconfiguration: string\n            competencyframeworkid: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n        }\n        framework: {\n            shortname: string\n            idnumber: string\n            description: string\n            descriptionformat: number\n            visible: number\n            scaleid: number\n            scaleconfiguration: string\n            contextid: number\n            taxonomies: string\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n            canmanage: number\n            competenciescount: number\n            contextname: string\n            contextnamenoprefix: string\n        }\n        hascourses: number\n        hasrelatedcompetencies: number\n        scaleid: number\n        scaleconfiguration: string\n        taxonomyterm: string\n        comppath: {\n            ancestors: {\n                id: number\n                name: string\n                first: number\n                last: number\n                position: number\n            }[]\n            framework: {\n                id: number\n                name: string\n                first: number\n                last: number\n                position: number\n            }\n            pluginbaseurl: string\n            pagecontextid: number\n        }\n    }\n    user: {\n        id: number\n        email: string\n        idnumber: string\n        phone1: string\n        phone2: string\n        department: string\n        institution: string\n        fullname: string\n        identity: string\n        profileurl: string\n        profileimageurl: string\n        profileimageurlsmall: string\n    }\n    usercompetency: {\n        userid: number\n        competencyid: number\n        status: number\n        reviewerid: number\n        proficiency: number\n        grade: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        canrequestreview: number\n        canreview: number\n        gradename: string\n        isrequestreviewallowed: number\n        iscancelreviewrequestallowed: number\n        isstartreviewallowed: number\n        isstopreviewallowed: number\n        isstatusidle: number\n        isstatusinreview: number\n        isstatuswaitingforreview: number\n        proficiencyname: string\n        reviewer: {\n            id: number\n            email: string\n            idnumber: string\n            phone1: string\n            phone2: string\n            department: string\n            institution: string\n            fullname: string\n            identity: string\n            profileurl: string\n            profileimageurl: string\n            profileimageurlsmall: string\n        }\n        statusname: string\n        url: string\n    }\n    usercompetencyplan: {\n        userid: number\n        competencyid: number\n        proficiency: number\n        grade: number\n        planid: number\n        sortorder: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        gradename: string\n        proficiencyname: string\n    }\n    usercompetencycourse: {\n        userid: number\n        courseid: number\n        competencyid: number\n        proficiency: number\n        grade: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        gradename: string\n        proficiencyname: string\n    }\n    evidence: {\n        usercompetencyid: number\n        contextid: number\n        action: number\n        actionuserid: number\n        descidentifier: string\n        desccomponent: string\n        desca: string\n        url: string\n        grade: number\n        note: string\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        actionuser: {\n            id: number\n            email: string\n            idnumber: string\n            phone1: string\n            phone2: string\n            department: string\n            institution: string\n            fullname: string\n            identity: string\n            profileurl: string\n            profileimageurl: string\n            profileimageurlsmall: string\n        }\n        description: string\n        gradename: string\n        userdate: string\n        candelete: number\n    }[]\n    commentarea: {\n        component: string\n        commentarea: string\n        itemid: number\n        courseid: number\n        contextid: number\n        cid: string\n        autostart: number\n        canpost: number\n        canview: number\n        count: number\n        collapsediconkey: string\n        displaytotalcount: number\n        displaycancel: number\n        fullwidth: number\n        linktext: string\n        notoggle: number\n        template: string\n        canpostorhascomments: number\n    }\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_lp_data_for_user_competency_summary_in_course",
                    "description": "Load a summary of a user competency.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int   //Data base record id for the user"
                        },
                        {
                            "title": "competencyid",
                            "structure": "int   //Data base record id for the competency"
                        },
                        {
                            "title": "courseid",
                            "structure": "int   //Data base record id for the course"
                        }
                    ],
                    "response": "type reponse = {\n    usercompetencysummary: {\n        showrelatedcompetencies: number\n        cangrade: number\n        competency: {\n            linkedcourses: {\n                id: number\n                fullname: string\n                shortname: string\n                idnumber: string\n                summary: string\n                summaryformat: number\n                startdate: number\n                enddate: number\n                fullnamedisplay: string\n                viewurl: string\n            }[]\n            relatedcompetencies: {\n                shortname: string\n                idnumber: string\n                description: string\n                descriptionformat: number\n                sortorder: number\n                parentid: number\n                path: string\n                ruleoutcome: number\n                ruletype: string\n                ruleconfig: string\n                scaleid: number\n                scaleconfiguration: string\n                competencyframeworkid: number\n                id: number\n                timecreated: number\n                timemodified: number\n                usermodified: number\n            }[]\n            competency: {\n                shortname: string\n                idnumber: string\n                description: string\n                descriptionformat: number\n                sortorder: number\n                parentid: number\n                path: string\n                ruleoutcome: number\n                ruletype: string\n                ruleconfig: string\n                scaleid: number\n                scaleconfiguration: string\n                competencyframeworkid: number\n                id: number\n                timecreated: number\n                timemodified: number\n                usermodified: number\n            }\n            framework: {\n                shortname: string\n                idnumber: string\n                description: string\n                descriptionformat: number\n                visible: number\n                scaleid: number\n                scaleconfiguration: string\n                contextid: number\n                taxonomies: string\n                id: number\n                timecreated: number\n                timemodified: number\n                usermodified: number\n                canmanage: number\n                competenciescount: number\n                contextname: string\n                contextnamenoprefix: string\n            }\n            hascourses: number\n            hasrelatedcompetencies: number\n            scaleid: number\n            scaleconfiguration: string\n            taxonomyterm: string\n            comppath: {\n                ancestors: {\n                    id: number\n                    name: string\n                    first: number\n                    last: number\n                    position: number\n                }[]\n                framework: {\n                    id: number\n                    name: string\n                    first: number\n                    last: number\n                    position: number\n                }\n                pluginbaseurl: string\n                pagecontextid: number\n            }\n        }\n        user: {\n            id: number\n            email: string\n            idnumber: string\n            phone1: string\n            phone2: string\n            department: string\n            institution: string\n            fullname: string\n            identity: string\n            profileurl: string\n            profileimageurl: string\n            profileimageurlsmall: string\n        }\n        usercompetency: {\n            userid: number\n            competencyid: number\n            status: number\n            reviewerid: number\n            proficiency: number\n            grade: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n            canrequestreview: number\n            canreview: number\n            gradename: string\n            isrequestreviewallowed: number\n            iscancelreviewrequestallowed: number\n            isstartreviewallowed: number\n            isstopreviewallowed: number\n            isstatusidle: number\n            isstatusinreview: number\n            isstatuswaitingforreview: number\n            proficiencyname: string\n            reviewer: {\n                id: number\n                email: string\n                idnumber: string\n                phone1: string\n                phone2: string\n                department: string\n                institution: string\n                fullname: string\n                identity: string\n                profileurl: string\n                profileimageurl: string\n                profileimageurlsmall: string\n            }\n            statusname: string\n            url: string\n        }\n        usercompetencyplan: {\n            userid: number\n            competencyid: number\n            proficiency: number\n            grade: number\n            planid: number\n            sortorder: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n            gradename: string\n            proficiencyname: string\n        }\n        usercompetencycourse: {\n            userid: number\n            courseid: number\n            competencyid: number\n            proficiency: number\n            grade: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n            gradename: string\n            proficiencyname: string\n        }\n        evidence: {\n            usercompetencyid: number\n            contextid: number\n            action: number\n            actionuserid: number\n            descidentifier: string\n            desccomponent: string\n            desca: string\n            url: string\n            grade: number\n            note: string\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n            actionuser: {\n                id: number\n                email: string\n                idnumber: string\n                phone1: string\n                phone2: string\n                department: string\n                institution: string\n                fullname: string\n                identity: string\n                profileurl: string\n                profileimageurl: string\n                profileimageurlsmall: string\n            }\n            description: string\n            gradename: string\n            userdate: string\n            candelete: number\n        }[]\n        commentarea: {\n            component: string\n            commentarea: string\n            itemid: number\n            courseid: number\n            contextid: number\n            cid: string\n            autostart: number\n            canpost: number\n            canview: number\n            count: number\n            collapsediconkey: string\n            displaytotalcount: number\n            displaycancel: number\n            fullwidth: number\n            linktext: string\n            notoggle: number\n            template: string\n            canpostorhascomments: number\n        }\n    }\n    course: {\n        id: number\n        fullname: string\n        shortname: string\n        idnumber: string\n        summary: string\n        summaryformat: number\n        startdate: number\n        enddate: number\n        fullnamedisplay: string\n        viewurl: string\n    }\n    coursemodules: {\n        id: number\n        name: string\n        url: string\n        iconurl: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_lp_data_for_user_competency_summary_in_plan",
                    "description": "Load a summary of a user competency.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "competencyid",
                            "structure": "int   //Data base record id for the competency"
                        },
                        {
                            "title": "planid",
                            "structure": "int   //Data base record id for the plan"
                        }
                    ],
                    "response": "type reponse = {\n    usercompetencysummary: {\n        showrelatedcompetencies: number\n        cangrade: number\n        competency: {\n            linkedcourses: {\n                id: number\n                fullname: string\n                shortname: string\n                idnumber: string\n                summary: string\n                summaryformat: number\n                startdate: number\n                enddate: number\n                fullnamedisplay: string\n                viewurl: string\n            }[]\n            relatedcompetencies: {\n                shortname: string\n                idnumber: string\n                description: string\n                descriptionformat: number\n                sortorder: number\n                parentid: number\n                path: string\n                ruleoutcome: number\n                ruletype: string\n                ruleconfig: string\n                scaleid: number\n                scaleconfiguration: string\n                competencyframeworkid: number\n                id: number\n                timecreated: number\n                timemodified: number\n                usermodified: number\n            }[]\n            competency: {\n                shortname: string\n                idnumber: string\n                description: string\n                descriptionformat: number\n                sortorder: number\n                parentid: number\n                path: string\n                ruleoutcome: number\n                ruletype: string\n                ruleconfig: string\n                scaleid: number\n                scaleconfiguration: string\n                competencyframeworkid: number\n                id: number\n                timecreated: number\n                timemodified: number\n                usermodified: number\n            }\n            framework: {\n                shortname: string\n                idnumber: string\n                description: string\n                descriptionformat: number\n                visible: number\n                scaleid: number\n                scaleconfiguration: string\n                contextid: number\n                taxonomies: string\n                id: number\n                timecreated: number\n                timemodified: number\n                usermodified: number\n                canmanage: number\n                competenciescount: number\n                contextname: string\n                contextnamenoprefix: string\n            }\n            hascourses: number\n            hasrelatedcompetencies: number\n            scaleid: number\n            scaleconfiguration: string\n            taxonomyterm: string\n            comppath: {\n                ancestors: {\n                    id: number\n                    name: string\n                    first: number\n                    last: number\n                    position: number\n                }[]\n                framework: {\n                    id: number\n                    name: string\n                    first: number\n                    last: number\n                    position: number\n                }\n                pluginbaseurl: string\n                pagecontextid: number\n            }\n        }\n        user: {\n            id: number\n            email: string\n            idnumber: string\n            phone1: string\n            phone2: string\n            department: string\n            institution: string\n            fullname: string\n            identity: string\n            profileurl: string\n            profileimageurl: string\n            profileimageurlsmall: string\n        }\n        usercompetency: {\n            userid: number\n            competencyid: number\n            status: number\n            reviewerid: number\n            proficiency: number\n            grade: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n            canrequestreview: number\n            canreview: number\n            gradename: string\n            isrequestreviewallowed: number\n            iscancelreviewrequestallowed: number\n            isstartreviewallowed: number\n            isstopreviewallowed: number\n            isstatusidle: number\n            isstatusinreview: number\n            isstatuswaitingforreview: number\n            proficiencyname: string\n            reviewer: {\n                id: number\n                email: string\n                idnumber: string\n                phone1: string\n                phone2: string\n                department: string\n                institution: string\n                fullname: string\n                identity: string\n                profileurl: string\n                profileimageurl: string\n                profileimageurlsmall: string\n            }\n            statusname: string\n            url: string\n        }\n        usercompetencyplan: {\n            userid: number\n            competencyid: number\n            proficiency: number\n            grade: number\n            planid: number\n            sortorder: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n            gradename: string\n            proficiencyname: string\n        }\n        usercompetencycourse: {\n            userid: number\n            courseid: number\n            competencyid: number\n            proficiency: number\n            grade: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n            gradename: string\n            proficiencyname: string\n        }\n        evidence: {\n            usercompetencyid: number\n            contextid: number\n            action: number\n            actionuserid: number\n            descidentifier: string\n            desccomponent: string\n            desca: string\n            url: string\n            grade: number\n            note: string\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n            actionuser: {\n                id: number\n                email: string\n                idnumber: string\n                phone1: string\n                phone2: string\n                department: string\n                institution: string\n                fullname: string\n                identity: string\n                profileurl: string\n                profileimageurl: string\n                profileimageurlsmall: string\n            }\n            description: string\n            gradename: string\n            userdate: string\n            candelete: number\n        }[]\n        commentarea: {\n            component: string\n            commentarea: string\n            itemid: number\n            courseid: number\n            contextid: number\n            cid: string\n            autostart: number\n            canpost: number\n            canview: number\n            count: number\n            collapsediconkey: string\n            displaytotalcount: number\n            displaycancel: number\n            fullwidth: number\n            linktext: string\n            notoggle: number\n            template: string\n            canpostorhascomments: number\n        }\n    }\n    plan: {\n        name: string\n        description: string\n        descriptionformat: number\n        userid: number\n        templateid: number\n        origtemplateid: number\n        status: number\n        duedate: number\n        reviewerid: number\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        statusname: string\n        isbasedontemplate: number\n        canmanage: number\n        canrequestreview: number\n        canreview: number\n        canbeedited: number\n        isactive: number\n        isdraft: number\n        iscompleted: number\n        isinreview: number\n        iswaitingforreview: number\n        isreopenallowed: number\n        iscompleteallowed: number\n        isunlinkallowed: number\n        isrequestreviewallowed: number\n        iscancelreviewrequestallowed: number\n        isstartreviewallowed: number\n        isstopreviewallowed: number\n        isapproveallowed: number\n        isunapproveallowed: number\n        duedateformatted: string\n        commentarea: {\n            component: string\n            commentarea: string\n            itemid: number\n            courseid: number\n            contextid: number\n            cid: string\n            autostart: number\n            canpost: number\n            canview: number\n            count: number\n            collapsediconkey: string\n            displaytotalcount: number\n            displaycancel: number\n            fullwidth: number\n            linktext: string\n            notoggle: number\n            template: string\n            canpostorhascomments: number\n        }\n        reviewer: {\n            id: number\n            email: string\n            idnumber: string\n            phone1: string\n            phone2: string\n            department: string\n            institution: string\n            fullname: string\n            identity: string\n            profileurl: string\n            profileimageurl: string\n            profileimageurlsmall: string\n        }\n        template: {\n            shortname: string\n            description: string\n            descriptionformat: number\n            duedate: number\n            visible: number\n            contextid: number\n            id: number\n            timecreated: number\n            timemodified: number\n            usermodified: number\n            duedateformatted: string\n            cohortscount: number\n            planscount: number\n            canmanage: number\n            canread: number\n            contextname: string\n            contextnamenoprefix: string\n        }\n        url: string\n    }\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_lp_data_for_user_evidence_list_page",
                    "description": "Load the data for the user evidence list page template",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "userid",
                            "structure": "int   //The user ID"
                        }
                    ],
                    "response": "type reponse = {\n    canmanage: number\n    userid: number\n    pluginbaseurl: string\n    evidence: {\n        userid: number\n        name: string\n        description: string\n        descriptionformat: number\n        url: string\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        canmanage: number\n        filecount: number\n        files: {\n            contextid: number\n            component: string\n            filearea: string\n            itemid: number\n            filepath: string\n            filename: string\n            isdir: number\n            timemodified: number\n            timecreated: number\n            filesize: number\n            author: string\n            license: string\n            filenameshort: string\n            filesizeformatted: string\n            icon: string\n            timecreatedformatted: string\n            timemodifiedformatted: string\n            url: string\n        }[]\n        hasurlorfiles: number\n        urlshort: string\n        competencycount: number\n        usercompetencies: {\n            competency: {\n                shortname: string\n                idnumber: string\n                description: string\n                descriptionformat: number\n                sortorder: number\n                parentid: number\n                path: string\n                ruleoutcome: number\n                ruletype: string\n                ruleconfig: string\n                scaleid: number\n                scaleconfiguration: string\n                competencyframeworkid: number\n                id: number\n                timecreated: number\n                timemodified: number\n                usermodified: number\n            }\n            usercompetency: {\n                userid: number\n                competencyid: number\n                status: number\n                reviewerid: number\n                proficiency: number\n                grade: number\n                id: number\n                timecreated: number\n                timemodified: number\n                usermodified: number\n                canrequestreview: number\n                canreview: number\n                gradename: string\n                isrequestreviewallowed: number\n                iscancelreviewrequestallowed: number\n                isstartreviewallowed: number\n                isstopreviewallowed: number\n                isstatusidle: number\n                isstatusinreview: number\n                isstatuswaitingforreview: number\n                proficiencyname: string\n                reviewer: {\n                    id: number\n                    email: string\n                    idnumber: string\n                    phone1: string\n                    phone2: string\n                    department: string\n                    institution: string\n                    fullname: string\n                    identity: string\n                    profileurl: string\n                    profileimageurl: string\n                    profileimageurlsmall: string\n                }\n                statusname: string\n                url: string\n            }\n        }[]\n        userhasplan: number\n    }[]\n    navigation: {}[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_lp_data_for_user_evidence_page",
                    "description": "Load the data for the user evidence page template",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "id",
                            "structure": "int   //The user evidence ID"
                        }
                    ],
                    "response": "type reponse = {\n    userevidence: {\n        userid: number\n        name: string\n        description: string\n        descriptionformat: number\n        url: string\n        id: number\n        timecreated: number\n        timemodified: number\n        usermodified: number\n        canmanage: number\n        filecount: number\n        files: {\n            contextid: number\n            component: string\n            filearea: string\n            itemid: number\n            filepath: string\n            filename: string\n            isdir: number\n            timemodified: number\n            timecreated: number\n            filesize: number\n            author: string\n            license: string\n            filenameshort: string\n            filesizeformatted: string\n            icon: string\n            timecreatedformatted: string\n            timemodifiedformatted: string\n            url: string\n        }[]\n        hasurlorfiles: number\n        urlshort: string\n        competencycount: number\n        usercompetencies: {\n            competency: {\n                shortname: string\n                idnumber: string\n                description: string\n                descriptionformat: number\n                sortorder: number\n                parentid: number\n                path: string\n                ruleoutcome: number\n                ruletype: string\n                ruleconfig: string\n                scaleid: number\n                scaleconfiguration: string\n                competencyframeworkid: number\n                id: number\n                timecreated: number\n                timemodified: number\n                usermodified: number\n            }\n            usercompetency: {\n                userid: number\n                competencyid: number\n                status: number\n                reviewerid: number\n                proficiency: number\n                grade: number\n                id: number\n                timecreated: number\n                timemodified: number\n                usermodified: number\n                canrequestreview: number\n                canreview: number\n                gradename: string\n                isrequestreviewallowed: number\n                iscancelreviewrequestallowed: number\n                isstartreviewallowed: number\n                isstopreviewallowed: number\n                isstatusidle: number\n                isstatusinreview: number\n                isstatuswaitingforreview: number\n                proficiencyname: string\n                reviewer: {\n                    id: number\n                    email: string\n                    idnumber: string\n                    phone1: string\n                    phone2: string\n                    department: string\n                    institution: string\n                    fullname: string\n                    identity: string\n                    profileurl: string\n                    profileimageurl: string\n                    profileimageurlsmall: string\n                }\n                statusname: string\n                url: string\n            }\n        }[]\n        userhasplan: number\n    }\n    pluginbaseurl: string\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "search": [
                {
                    "title": "tool_lp_search_cohorts",
                    "description": "Search for cohorts.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "query",
                            "structure": "string   //Query string"
                        },
                        {
                            "title": "context",
                            "structure": "object {contextid int  Default to \"0\" //Context ID. Either use this value, or level and instanceid.contextlevel string  Default to \"\" //Context level. To be used with instanceid.instanceid int  Default to \"0\" //Context instance ID. To be used with level}"
                        },
                        {
                            "title": "includes",
                            "structure": "string  Default to \"parents\" //What other contexts to fetch the frameworks from. (all, parents, self)"
                        },
                        {
                            "title": "limitfrom",
                            "structure": "int  Default to \"0\" //limitfrom we are fetching the records from"
                        },
                        {
                            "title": "limitnum",
                            "structure": "int  Default to \"25\" //Number of records to fetch"
                        }
                    ],
                    "response": "type reponse = {\n    cohorts: {\n        id: number\n        name: string\n        idnumber: string\n        description: string\n        descriptionformat: number\n        visible: number\n        theme: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_lp_search_users",
                    "description": "Search for users.",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "query",
                            "structure": "string   //Query string"
                        },
                        {
                            "title": "capability",
                            "structure": "string   //Required capability"
                        },
                        {
                            "title": "limitfrom",
                            "structure": "int  Default to \"0\" //Number of records to skip"
                        },
                        {
                            "title": "limitnum",
                            "structure": "string  Default to \"100\" //Number of records to fetch"
                        }
                    ],
                    "response": "type reponse = {\n    users: {\n        id: number\n        email: string\n        idnumber: string\n        phone1: string\n        phone2: string\n        department: string\n        institution: string\n        fullname: string\n        identity: string\n        profileurl: string\n        profileimageurl: string\n        profileimageurlsmall: string\n    }[]\n    count: number\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "mobile": {
            "get": [
                {
                    "title": "tool_mobile_get_config",
                    "description": "Returns a list of the site configurations, filtering by section.\n                    ",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "section",
                            "structure": "string  Default to \"\" //Settings section name."
                        }
                    ],
                    "response": "type reponse = {\n    settings: {\n        name: string\n        value: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_mobile_get_content",
                    "description": "Returns a piece of content to be displayed in the Mobile app.",
                    "ajax": false,
                    "login": true,
                    "args": [
                        {
                            "title": "component",
                            "structure": "string   //Component where the class is e.g. mod_assign."
                        },
                        {
                            "title": "method",
                            "structure": "string   //Method to execute in class \\$component\\output\\mobile."
                        },
                        {
                            "title": "args",
                            "structure": " Optional //Args for the method are optional.list of (object {name string   //Param name.value string   //Param value.})"
                        }
                    ],
                    "response": "type reponse = {\n    templates: {\n        id: string\n        html: string\n    }[]\n    javascript: string\n    otherdata: {\n        name: string\n        value: string\n    }[]\n    files: {\n        filename: string\n        filepath: string\n        filesize: number\n        fileurl: string\n        timemodified: number\n        mimetype: string\n        isexternalfile: number\n        repositorytype: string\n    }[]\n    restrict: {\n        users: {}[]\n        courses: {}[]\n    }\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_mobile_get_plugins_supporting_mobile",
                    "description": "Returns a list of Moodle plugins supporting the mobile app.",
                    "ajax": false,
                    "login": true,
                    "args": [],
                    "response": "type reponse = {\n    plugins: {\n        component: string\n        version: string\n        addon: string\n        dependencies: {}[]\n        fileurl: string\n        filehash: string\n        filesize: number\n        handlers: string\n        lang: string\n    }[]\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                },
                {
                    "title": "tool_mobile_get_public_config",
                    "description": "Returns a list of the site public settings, those not requiring\n                        authentication.",
                    "ajax": true,
                    "login": false,
                    "args": [],
                    "response": "type reponse = {\n    wwwroot: string\n    httpswwwroot: string\n    sitename: string\n    guestlogin: number\n    rememberusername: number\n    authloginviaemail: number\n    registerauth: string\n    forgottenpasswordurl: string\n    authinstructions: string\n    authnoneenabled: number\n    enablewebservices: number\n    enablemobilewebservice: number\n    maintenanceenabled: number\n    maintenancemessage: string\n    logourl: string\n    compactlogourl: string\n    typeoflogin: number\n    launchurl: string\n    mobilecssurl: string\n    tool_mobile_disabledfeatures: string\n    identityproviders: {\n        name: string\n        iconurl: string\n        url: string\n    }[]\n    country: string\n    agedigitalconsentverification: number\n    supportname: string\n    supportemail: string\n    autolang: number\n    lang: string\n    langmenu: number\n    langlist: string\n    locale: string\n    warnings: {\n        item: string\n        itemid: number\n        warningcode: string\n        message: string\n    }[]\n}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        },
        "usertours": {
            "complete": [
                {
                    "title": "tool_usertours_complete_tour",
                    "description": "Mark the specified tour as completed for the current user",
                    "ajax": true,
                    "login": false,
                    "args": [
                        {
                            "title": "tourid",
                            "structure": "int   //Tour ID"
                        },
                        {
                            "title": "context",
                            "structure": "int   //Context ID"
                        },
                        {
                            "title": "pageurl",
                            "structure": "string   //Page URL"
                        },
                        {
                            "title": "stepid",
                            "structure": "int   //Step ID"
                        },
                        {
                            "title": "stepindex",
                            "structure": "int   //Step Number"
                        }
                    ],
                    "response": "type reponse = {}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ],
            "step": [
                {
                    "title": "tool_usertours_step_shown",
                    "description": "Mark the specified step as completed for the current user",
                    "ajax": true,
                    "login": true,
                    "args": [
                        {
                            "title": "tourid",
                            "structure": "int   //Tour ID"
                        },
                        {
                            "title": "context",
                            "structure": "int   //Context ID"
                        },
                        {
                            "title": "pageurl",
                            "structure": "string   //Page URL"
                        },
                        {
                            "title": "stepid",
                            "structure": "int   //Step ID"
                        },
                        {
                            "title": "stepindex",
                            "structure": "int   //Step Number"
                        }
                    ],
                    "response": "type reponse = {}\n",
                    "errors": [
                        "invalid_parameter_exception"
                    ]
                }
            ]
        }
    }
}